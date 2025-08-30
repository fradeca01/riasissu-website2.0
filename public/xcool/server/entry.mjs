import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CbTGQIRG.mjs';
import { manifest } from './manifest_DX-Tvu-b.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/form/_slug_.astro.mjs');
const _page3 = () => import('./pages/formclosed.astro.mjs');
const _page4 = () => import('./pages/info.astro.mjs');
const _page5 = () => import('./pages/robots.txt.astro.mjs');
const _page6 = () => import('./pages/tabelloni/atletica/alto/_alto_.astro.mjs');
const _page7 = () => import('./pages/tabelloni/atletica/corse/100mf_batterie.astro.mjs');
const _page8 = () => import('./pages/tabelloni/atletica/corse/100mm_batterie.astro.mjs');
const _page9 = () => import('./pages/tabelloni/atletica/corse/4x100mm_batterie.astro.mjs');
const _page10 = () => import('./pages/tabelloni/atletica/corse/_corse_.astro.mjs');
const _page11 = () => import('./pages/tabelloni/atletica/_altro_.astro.mjs');
const _page12 = () => import('./pages/tabelloni/atletica.astro.mjs');
const _page13 = () => import('./pages/tabelloni/coppa_chiosco.astro.mjs');
const _page14 = () => import('./pages/tabelloni/medals.astro.mjs');
const _page15 = () => import('./pages/tabelloni/nuoto/_altro_.astro.mjs');
const _page16 = () => import('./pages/tabelloni/nuoto.astro.mjs');
const _page17 = () => import('./pages/tabelloni/_sport_url_.astro.mjs');
const _page18 = () => import('./pages/tabelloni.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/form/[slug].astro", _page2],
    ["src/pages/formclosed.astro", _page3],
    ["src/pages/info.astro", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/tabelloni/atletica/alto/[alto].astro", _page6],
    ["src/pages/tabelloni/atletica/corse/100mF_batterie.astro", _page7],
    ["src/pages/tabelloni/atletica/corse/100mM_batterie.astro", _page8],
    ["src/pages/tabelloni/atletica/corse/4x100mM_batterie.astro", _page9],
    ["src/pages/tabelloni/atletica/corse/[corse].astro", _page10],
    ["src/pages/tabelloni/atletica/[altro].astro", _page11],
    ["src/pages/tabelloni/atletica/index.astro", _page12],
    ["src/pages/tabelloni/coppa_chiosco.astro", _page13],
    ["src/pages/tabelloni/medals.astro", _page14],
    ["src/pages/tabelloni/nuoto/[altro].astro", _page15],
    ["src/pages/tabelloni/nuoto/index.astro", _page16],
    ["src/pages/tabelloni/[sport_url].astro", _page17],
    ["src/pages/tabelloni/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/runner/work/xcool-webpage/xcool-webpage/dist/client/",
    "server": "file:///home/runner/work/xcool-webpage/xcool-webpage/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
