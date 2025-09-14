import { validatePassword } from "../service/userServices.js";
import { createSession, findSessions } from "../service/sessionServices.js";
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
    console.log(userId);
    const sessions = await findSessions({ user: userId, valid: false });
    console.log(sessions);
    return res.send({ sessions });
}
//# sourceMappingURL=sessionController.js.map