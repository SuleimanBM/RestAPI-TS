import { FilterQuery } from 'mongoose';
import { UserDocument, UserInput } from '../models/userModels.js';
export declare function createUser(input: UserInput): Promise<Pick<import("mongoose").FlattenMaps<UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, "id" | "_id" | "$assertPopulated" | "$clearModifiedPaths" | "$clone" | "$createModifiedPathsSnapshot" | "$getAllSubdocs" | "$ignore" | "$isDefault" | "$isDeleted" | "$getPopulatedDocs" | "$inc" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$model" | "$op" | "$restoreModifiedPathsSnapshot" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "get" | "getChanges" | "increment" | "init" | "invalidate" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "model" | "modifiedPaths" | "overwrite" | "$parent" | "populate" | "populated" | "replaceOne" | "save" | "schema" | "set" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync" | "__v" | "email" | "name" | "createdAt" | "updatedAt" | "comparePassword">>;
export declare function validatePassword({ email, password }: {
    email: string;
    password: string;
}): Promise<false | Pick<import("mongoose").FlattenMaps<UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, "id" | "_id" | "$assertPopulated" | "$clearModifiedPaths" | "$clone" | "$createModifiedPathsSnapshot" | "$getAllSubdocs" | "$ignore" | "$isDefault" | "$isDeleted" | "$getPopulatedDocs" | "$inc" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$model" | "$op" | "$restoreModifiedPathsSnapshot" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "get" | "getChanges" | "increment" | "init" | "invalidate" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "model" | "modifiedPaths" | "overwrite" | "$parent" | "populate" | "populated" | "replaceOne" | "save" | "schema" | "set" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync" | "__v" | "email" | "name" | "createdAt" | "updatedAt" | "comparePassword">>;
export declare function findUser(query: FilterQuery<UserDocument>): Promise<(import("mongoose").FlattenMaps<UserDocument> & Required<{
    _id: import("mongoose").FlattenMaps<unknown>;
}> & {
    __v: number;
}) | null>;
//# sourceMappingURL=userServices.d.ts.map