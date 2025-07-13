// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import { Request, Response } from "express";
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");

initializeApp();

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

interface userResponse {
    id: string;
    displayName: string;
    mail: string;
    userPrincipalName: string;
}


exports.auth = onRequest({ secrets: ["AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_TENANT_ID"] }, async (req: Request, res: Response) => {
    const CLIENT_ID = process.env.AZURE_CLIENT_ID;
    const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
    const TENANT_ID = process.env.AZURE_TENANT_ID;

    logger.info("Microsoft login function triggered", CLIENT_ID, TENANT_ID);

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

        } catch (error) {
            logger.error("Authorization request failed", error);
        }
    } else {
        logger.error("Azure credentials are not defined");
    }
});

const callbackScriptResponse = (res: Response, status: string, token: string) => {
    logger.info("Callback script response triggered", status, token);
    return res.status(200).set('Content-Type', 'text/html').send(`
<html>
<head>
    <script>
        const receiveMessage = (message) => {
            console.log("Message received from opener:", message);
            window.opener.postMessage(
                'authorization:github:${status}:${JSON.stringify({ token })}',
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

exports.callback = onRequest({ secrets: ["AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_TENANT_ID", "GITHUB_TOKEN"] }, async (req: Request, res: Response) => {

    const code = req.query.code as string;
    const CLIENT_ID = process.env.AZURE_CLIENT_ID;
    const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
    const TENANT_ID = process.env.AZURE_TENANT_ID;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    logger.info("Microsoft login function triggered", CLIENT_ID, TENANT_ID);

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
            const tokenData = await tokenResponse.json() as TokenResponse;
            const accessToken: string = tokenData.access_token;

            if (!accessToken) return res.status(401).send("Invalid Microsoft token");

            const userResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });


            const user = await userResponse.json() as userResponse;
            const email = user.mail || user.userPrincipalName;
            logger.info("User data response status", user);

            logger.info("User data retrieved", email);

            // const allowedEmails = ["francesco.decataldo@riasissu.it", "admin@company.com"];

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
    } else {
        logger.error("Azure credentials are not defined");
        return res.status(500).send("Azure credentials are not defined");
    }




});


