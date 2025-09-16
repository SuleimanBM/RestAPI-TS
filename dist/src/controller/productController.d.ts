import { Request, Response } from "express";
import { createProductInput, deleteProductInput, readProductInput, updateProductInput } from "../schema/productSchema.js";
export declare function createProductHandler(req: Request<{}, {}, createProductInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateProductHandler(req: Request<updateProductInput["params"], {}, updateProductInput["body"]>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProductHandler(req: Request<readProductInput["params"]>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteProductHandler(req: Request<deleteProductInput["params"]>, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=productController.d.ts.map