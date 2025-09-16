import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { ProductDocument, ProductInput } from "../models/productModel.js";
export declare function createProduct(input: ProductInput): Promise<import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function findProduct(query: FilterQuery<ProductDocument>, options?: QueryOptions): Promise<(import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare function findAndUpdateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions): Promise<(import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare function deleteProduct(query: FilterQuery<ProductDocument>): Promise<import("mongodb").DeleteResult>;
//# sourceMappingURL=productService.d.ts.map