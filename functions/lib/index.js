"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
initializeApp();
exports.auth = onRequest({ secrets: ["AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_TENANT_ID"] }, async (req, res) => {
    const CLIENT_ID = process.env.AZURE_CLIENT_ID;
    const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
    const TENANT_ID = process.env.AZURE_TENANT_ID;
    if (CLIENT_ID && CLIENT_SECRET && TENANT_ID) {
        try {
            const params = new URLSearchParams({
                client_id: CLIENT_ID,
                response_type: "code",
                response_mode: "query",
                scope: "User.Read openid email profile",
                state: "some_random_state",
            });
            res.redirect(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?${params.toString()}`);
        }
        catch (error) {
            logger.error("Authorization request failed", error);
        }
    }
    else {
        logger.error("Azure credentials are not defined");
    }
});
const callbackScriptResponse = (res, status, token) => {
    logger.info("Callback script response triggered", status, token);
    const userData = {
        token: token,
        username: 'AliceSmith',
        email: 'alice@example.com',
        name: 'Alice Smith'
    };
    return res.status(200).set('Content-Type', 'text/html').send(`
<html>
<head>
    <script>
        const receiveMessage = (message) => {
            console.log("Message received from opener:", message);
            window.opener.postMessage(
                'authorization:github:${status}:${JSON.stringify({ userData })}',
                '*'
            );
            window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
        console.log("Authorizing Decap CMS with GitHub");
    </script>
    <body>
        <p>Authorizing Decap...</p>
    </body>
</head>
</html>
`);
};
exports.callback = onRequest({ secrets: ["AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_TENANT_ID", "GITHUB_TOKEN"] }, async (req, res) => {
    const code = req.query.code;
    const CLIENT_ID = process.env.AZURE_CLIENT_ID;
    const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
    const TENANT_ID = process.env.AZURE_TENANT_ID;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    if (CLIENT_ID && CLIENT_SECRET && TENANT_ID) {
        try {
            const tokenResponse = await fetch(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    client_id: CLIENT_ID,
                    scope: "User.Read",
                    code,
                    grant_type: "authorization_code",
                    client_secret: CLIENT_SECRET,
                }),
            });
            const tokenData = await tokenResponse.json();
            const accessToken = tokenData.access_token;
            if (!accessToken)
                return res.status(401).send("Invalid Microsoft token");
            const userResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const user = await userResponse.json();
            const email = user.mail || user.userPrincipalName;
            const allowedEmails = ["francesco.decataldo@riasissu.it", "admin@company.com"];
            if (!allowedEmails.includes(email)) {
                logger.error("Unauthorized email", email);
                return res.status(403).send("Unauthorized email");
            }
            if (!GITHUB_TOKEN) {
                logger.error("GITHUB_TOKEN is not defined");
                return res.status(500).send("GITHUB_TOKEN is not defined");
            }
            return callbackScriptResponse(res, "success", GITHUB_TOKEN);
        }
        catch (error) {
            logger.error("Authorization request failed", error);
            return callbackScriptResponse(res, "error", "");
        }
    }
    else {
        logger.error("Azure credentials are not defined");
        return res.status(500).send("Azure credentials are not defined");
    }
});
//# sourceMappingURL=index.js.map