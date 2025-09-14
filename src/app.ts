import express from "express";
import config from "../config/default.js";
import connect from "./utils/connect.js"
import logger from "./utils/logger.js";
import routes from "./routes.js";

import deserializeUser from "../src/middleware/deserializeUser.js"



const port = config.port

const app = express();

app.use(express.json())

app.use(deserializeUser)

app.listen(port, async () => {

    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
})