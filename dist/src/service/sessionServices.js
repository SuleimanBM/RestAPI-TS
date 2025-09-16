import SessionModel from "../models/sessionModels.js";
import logger from "../utils/logger.js";
import { signJwt, verifyJwt } from "../utils/jwt.js";
import get from "lodash/get.js";
import { findUser } from "./userServices.js";
import config from "../../config/default.js";
export async function createSession(userId, userAgent) {
    const session = await SessionModel.create({ user: userId, userAgent });
    logger.info(`sessions created,${session}`);
    return session.toJSON();
}
export async function findSessions(query) {
    return await SessionModel.find(query).lean();
}
export async function updateSesssion(query, update) {
    return SessionModel.updateOne(query, update);
}
export async function reIssueAccessToken({ refreshToken }) {
    const { decoded } = verifyJwt(refreshToken);
    if (!decoded || !get(decoded, "session"))
        return false;
    const session = await SessionModel.findById(get(decoded, "session"));
    if (!session || !session.valid)
        return false;
    const user = await findUser({ _id: session.user });
    if (!user)
        return false;
    const accessToken = signJwt({ ...user, session: session._id }, { expiresIn: config.accessTokenTtl });
    return accessToken;
}
//# sourceMappingURL=sessionServices.js.map