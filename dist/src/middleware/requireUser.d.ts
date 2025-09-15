import { Request, Response, NextFunction } from "express";
declare const requireUser: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default requireUser;
//# sourceMappingURL=requireUser.d.ts.map