import UserModel from '../models/userModels.js';
import omit from "lodash/omit.js";
export async function createUser(input) {
    try {
        const user = await UserModel.create(input);
        return omit(user.toJSON(), "password");
    }
    catch (e) {
        throw new Error(e);
    }
}
export async function validatePassword({ email, password }) {
    const user = await UserModel.findOne({ email });
    if (!user) {
        return false;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid)
        return false;
    return omit(user.toJSON(), "password");
}
//# sourceMappingURL=userServices.js.map