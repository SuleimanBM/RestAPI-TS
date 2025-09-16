import { validatePassword } from "../service/userServices.js";
import { createSession, findSessions, updateSesssion } from "../service/sessionServices.js";
import { signJwt } from "../utils/jwt.js";
import config from "../../config/default.js";
import logger from "../utils/logger.js";
export async function createUserSessionHandler(req, res) {
    //validate the user's password
    const user = await validatePassword(req.body);
    if (!user) {
        return res.status(401).send("Invalid email or password");
    }
    //create a session
    const session = await createSession(String(user._id), req.get("user-agent") || "");
    //create an access token
    const accessToken = signJwt({ ...user, session: session._id }, { expiresIn: config.accessTokenTtl });
    //create a refresh token
    const refreshToken = signJwt({ ...user, session: session._id }, { expiresIn: config.refreshTokenTtl });
    logger.info("session created");
    //return access & refresh tokens
    return res.send({ accessToken, refreshToken });
}
export async function getUserSessionsHandler(req, res) {
    const userId = await res.locals.user._id;
    const sessions = await findSessions({ user: userId, valid: true });
    return res.send({ sessions });
}
export async function deleteSessionHandler(req, res) {
    const sessionId = res.locals.user.session;
    await updateSesssion({ _id: sessionId }, { valid: false });
    return res.send({
        accessToken: null,
        refreshToken: null,
    });
}
//# sourceMappingURL=sessionController.js.map