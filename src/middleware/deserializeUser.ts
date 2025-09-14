import { Request, Response, NextFunction } from "express"
import get from 'lodash/get.js';
import { verifyJwt } from "../utils/jwt.js";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    if(!accessToken){
        return next()
    }
    console.log("Accesstokent", accessToken)
    const {decoded, expired}  = verifyJwt(accessToken)

    console.log('decoded', decoded)    

    if(decoded){
        res.locals.user = decoded
        return next();
    }

    return next();
}

export default deserializeUser;