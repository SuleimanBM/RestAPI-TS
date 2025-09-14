import { InferSchemaType } from 'mongoose';
import UserModel, {UserDocument} from '../models/userModels.js';
import omit from "lodash/omit.js";


export async function createUser(input: InferSchemaType<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>){
    try{
        const user =  await UserModel.create(input);
        return omit(user.toJSON(), "password");
    }catch(e: any){
        throw new Error(e)
    }
}

export async function validatePassword({email, password}:{email: string, password: string}){
    const user = await UserModel.findOne({email})

    if(!user){
        return false
    }

    const isValid = await user.comparePassword(password)

    if(!isValid) return false

    return omit(user.toJSON(), "password");
}