import mongoose from "mongoose";
import { UserDocument } from "./userModels.js";
export interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const SessionModel: mongoose.Model<SessionDocument, {}, {}, {}, mongoose.Document<unknown, {}, SessionDocument, {}, {}> & SessionDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default SessionModel;
//# sourceMappingURL=sessionModels.d.ts.map