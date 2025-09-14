import {Request, Response} from "express"
import omit from "lodash/omit.js";
import logger from "../utils/logger.js"
import { createUser } from "../service/userServices.js"
import { createUserInput } from "../schema/userSchema.js";



export async function createUserHandler(
    req: Request<{}, {}, createUserInput["body"]>,
    res: Response
) {
    try{
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"));
    }
    catch(e: any){
        logger.error(e);
        return res.status(409).send(e.message);
    }
}