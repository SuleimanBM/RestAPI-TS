import { FilterQuery } from "mongoose";
import { SessionDocument } from "../models/sessionModels.js";
export declare function createSession(userId: string, userAgent: string): Promise<import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: import("mongoose").Types.ObjectId | null;
    userAgent?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare function findSessions(query: FilterQuery<SessionDocument>): Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    valid: boolean;
    user?: import("mongoose").Types.ObjectId | null;
    userAgent?: string | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
//# sourceMappingURL=sessionServices.d.ts.map