import mongoose from "mongoose";
import config from "config";
async function connect() {
    const dbUri = config.get("dbUri");
    try {
        await mongoose.connect(dbUri);
        console.log("DB connected");
    }
    catch (error) {
        console.error("Could not connect do DB", error);
    }
}
export default connect;
//# sourceMappingURL=connect.js.map