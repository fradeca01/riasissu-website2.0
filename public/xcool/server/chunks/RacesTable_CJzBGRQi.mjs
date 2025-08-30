import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { T as Theme } from './Layout_DbmlHL6U.mjs';

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${Theme.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
const Th = styled.th`
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${Theme.secondary};
  color: ${Theme.primary};
  white-space: nowrap;
  &:first-of-type {
    border-top-left-radius: 12px;
  }
  &:last-of-type {
    border-top-right-radius: 12px;
  }
`;
const BodyRow = styled.tr`
  cursor: pointer;
  &:nth-of-type(odd) {
    background: #626262;
  }
`;
const Cell = styled.td`
  padding: 12px 16px;
  vertical-align: middle; /* centro verticale */
  text-align: center; /* centro orizzontale */
  font-variant-numeric: tabular-nums;
`;
const CellName = styled(Cell)`
  min-width: 250px;
`;
const Badge = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  display: inline-block;
  min-width: 60px;
  text-align: center;
`;
styled.span`
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 8px;
  border: 1px solid ${Theme.primary};
  color: ${Theme.primary};
  font-size: 10px;
  font-weight: 700;
`;
const Space = styled(Cell)`
  width: 300px;
`;
const INVALID = /* @__PURE__ */ new Set(["DQ", "DNF", "DNS"]);
function parseTimeToMillis(inp, decimals = 2) {
  const raw = (inp || "").trim();
  if (!raw) return { valid: false, millis: null, display: "", status: "DNS" };
  const up = raw.toUpperCase();
  if (INVALID.has(up)) {
    const status = up;
    return { valid: false, millis: null, display: status, status };
  }
  const t = raw.replace(",", ".");
  const parts = t.split(":");
  let h = 0, m = 0, s = 0;
  if (parts.length === 1) {
    s = Number(parts[0]);
  } else if (parts.length === 2) {
    m = Number(parts[0]);
    s = Number(parts[1]);
  } else if (parts.length === 3) {
    h = Number(parts[0]);
    m = Number(parts[1]);
    s = Number(parts[2]);
  } else {
    return { valid: false, millis: null, display: raw, status: "OK" };
  }
  if (![h, m, s].every((n) => Number.isFinite(n))) {
    return { valid: false, millis: null, display: raw, status: "OK" };
  }
  const millis = Math.round((h * 3600 + m * 60 + s) * 1e3);
  const display = formatMillis(millis, decimals);
  return { valid: true, millis, display, status: "OK" };
}
function formatMillis(ms, decimals = 2) {
  const totalSeconds = ms / 1e3;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  const secStr = seconds.toFixed(decimals).padStart(2 + (decimals ? decimals + 1 : 0), "0");
  if (hours > 0)
    return `${hours}:${String(minutes).padStart(2, "0")}:${secStr}`;
  if (minutes > 0)
    return `${minutes}:${secStr.padStart(decimals ? 2 + 1 + decimals : 2, "0")}`;
  return secStr;
}
function compareResults(a, b) {
  if (a.valid && !b.valid) return -1;
  if (!a.valid && b.valid) return 1;
  if (!a.valid && !b.valid) {
    const order = (st) => st === "DQ" ? 2 : st === "DNF" ? 3 : 4;
    return order(a.status) - order(b.status);
  }
  return a.millis - b.millis;
}
function RacesTable({
  event,
  data,
  decimals = 2,
  finals,
  atleta_squadra = true
}) {
  const computed = useMemo(() => {
    const list = data.map((row) => {
      const parsed = parseTimeToMillis(row.time, decimals);
      const ev = {
        valid: parsed.valid,
        millis: parsed.millis,
        status: parsed.status
      };
      return { row, parsed, ev };
    });
    list.sort((A, B) => compareResults(A.ev, B.ev));
    return list.map((item, i, arr) => {
      const isTie = i > 0 && compareResults(arr[i - 1].ev, item.ev) === 0 && (arr[i - 1].ev.valid && item.ev.valid && arr[i - 1].ev.millis === item.ev.millis || !arr[i - 1].ev.valid && !item.ev.valid && arr[i - 1].ev.status === item.ev.status);
      const rank = isTie ? arr[i - 1]._rank : i + 1;
      item._rank = rank;
      return item;
    });
  }, [data, decimals]);
  const series = data.reduce((acc, row) => acc || "series" in row, false);
  const lanes = data.reduce((acc, row) => acc || "lane" in row, false);
  return /* @__PURE__ */ jsxs(TableWrapper, { children: [
    event && /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          margin: "0px 0 10px 4px",
          color: "#94a3b8",
          textAlign: "left"
        },
        children: event
      }
    ),
    /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(Th, { children: "#" }),
        /* @__PURE__ */ jsx(Th, { children: atleta_squadra ? "Atleta" : "Squadra" }),
        /* @__PURE__ */ jsx(Th, { children: "Scuola" }),
        series && /* @__PURE__ */ jsx(Th, { children: "Serie" }),
        lanes && /* @__PURE__ */ jsx(Th, { children: "Corsia" }),
        /* @__PURE__ */ jsx(Th, {}),
        /* @__PURE__ */ jsx(Th, { children: "Tempo" }),
        !finals && /* @__PURE__ */ jsx(Th, { children: "Q" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: computed.map(({ row, parsed, _rank }) => {
        const timeDisplay = parsed.display || row.time;
        return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsxs(BodyRow, { children: [
          /* @__PURE__ */ jsx(Cell, { children: _rank }),
          /* @__PURE__ */ jsx(CellName, { children: row.athlete }),
          /* @__PURE__ */ jsx(Cell, { children: row.school ?? row.country ?? "" }),
          series && /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: row.series ?? "" }) }),
          lanes && /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: row.lane ?? "" }) }),
          /* @__PURE__ */ jsx(Space, {}),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: timeDisplay }) }),
          !finals && /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: row.qualifier ? row.qualifier : "" }) })
        ] }) }, row.athlete);
      }) })
    ] })
  ] });
}

export { RacesTable as R };
