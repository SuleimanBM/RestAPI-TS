import SessionModel from "../models/sessionModels.js";
export async function createSession(userId, userAgent) {
    const session = await SessionModel.create({ user: userId, userAgent });
    return session.toJSON();
}
export async function findSessions(query) {
    return await SessionModel.find(query).lean();
}
//# sourceMappingURL=sessionServices.js.map