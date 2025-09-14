import mongoose from "mongoose";
import { UserDocument } from "./userModels.js";
export interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const SessionModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    valid: boolean;
    user?: mongoose.Types.ObjectId | null;
    userAgent?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default SessionModel;
//# sourceMappingURL=sessionModels.d.ts.map