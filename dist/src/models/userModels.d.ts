import mongoose from "mongoose";
export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default UserModel;
//# sourceMappingURL=userModels.d.ts.map