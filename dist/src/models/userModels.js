import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from "../../config/default.js";
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});
userSchema.pre('save', async function (next) {
    let user = this;
    if (!user.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(config.saltWorkFactor);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
//# sourceMappingURL=userModels.js.map