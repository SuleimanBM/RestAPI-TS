import omit from "lodash/omit.js";
import logger from "../utils/logger.js";
import { createUser } from "../service/userServices.js";
export async function createUserHandler(req, res) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    }
    catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}
//# sourceMappingURL=userController.js.map