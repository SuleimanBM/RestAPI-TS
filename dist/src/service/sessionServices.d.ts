import { FilterQuery, UpdateQuery } from "mongoose";
import { SessionDocument } from "../models/sessionModels.js";
export declare function createSession(userId: string, userAgent: string): Promise<import("mongoose").FlattenMaps<SessionDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export declare function findSessions(query: FilterQuery<SessionDocument>): Promise<(import("mongoose").FlattenMaps<SessionDocument> & Required<{
    _id: import("mongoose").FlattenMaps<unknown>;
}> & {
    __v: number;
})[]>;
export declare function updateSesssion(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>): Promise<import("mongoose").UpdateWriteOpResult>;
export declare function reIssueAccessToken({ refreshToken }: {
    refreshToken: string;
}): Promise<string | false>;
//# sourceMappingURL=sessionServices.d.ts.map