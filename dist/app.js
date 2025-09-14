import express from "express";
import config from "config";
import connect from "./utils/connect.js";
const port = config.get("port");
const app = express();
app.listen(port, async () => {
    console.log("This app is runing");
    await connect();
});
//# sourceMappingURL=app.js.map