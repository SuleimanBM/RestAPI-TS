import get from 'lodash/get.js';
import { verifyJwt } from "../utils/jwt.js";
const deserializeUser = (req, res, next) => {
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
    if (!accessToken) {
        return next();
    }
    console.log("Accesstokent", accessToken);
    const { decoded, expired } = verifyJwt(accessToken);
    console.log('decoded', decoded);
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }
    return next();
};
export default deserializeUser;
//# sourceMappingURL=deserializeUser.js.map