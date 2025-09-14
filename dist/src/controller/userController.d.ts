import { Request, Response } from "express";
import { createUserInput } from "../schema/userSchema.js";
export declare function createUserHandler(req: Request<{}, {}, createUserInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=userController.d.ts.map