import { FilterQuery, UpdateQuery } from "mongoose";
import { StringValue } from "ms"
import SessionModel, { SessionDocument } from "../models/sessionModels.js"
import logger from "../utils/logger.js";
import { signJwt, verifyJwt } from "../utils/jwt.js";
import get from "lodash/get.js";
import { findUser } from "./userServices.js";
import config from "../../config/default.js"



export async function createSession(userId: string, userAgent: string){
    const session = await SessionModel.create({user: userId, userAgent});
    logger.info(`sessions created,${session}`);
    return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>){
    return await SessionModel.find(query).lean();

}

export async function updateSesssion(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>){
    return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({refreshToken}:{refreshToken: string}){
    const {decoded} = verifyJwt(refreshToken);

    if(!decoded || !get(decoded, "session")) return false;

    const session = await SessionModel.findById(get(decoded,"session"));

    if(!session || !session.valid) return false;

    const user = await findUser({_id: session.user})

    if(!user) return false;

    const accessToken = signJwt(
            {...user, session: session._id},
            {expiresIn: config.accessTokenTtl as StringValue}
        );

        return accessToken

}