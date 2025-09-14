import mongoose from "mongoose";
import config from "../../config/default.js";
import logger from "./logger.js";

async function connect(){
    const dbUri = config.dbUri;

    try{
        await mongoose.connect(dbUri);
        logger.info("DB connected");
    }catch(error){
        logger.error("Could not connect do DB");
        process.exit(1);
    }
}

export default connect;