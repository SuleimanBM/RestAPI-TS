import mongoose from "mongoose";
import { UserDocument } from "./userModels.js";
export interface ProductInput {
    user: UserDocument['_id'];
    title: string;
    description: string;
    price: number;
    image: string;
}
export interface ProductDocument extends ProductInput, mongoose.Document {
    creaatedAt: Date;
    updatedAt: Date;
}
declare const ProductModel: mongoose.Model<ProductDocument, {}, {}, {}, mongoose.Document<unknown, {}, ProductDocument, {}, {}> & ProductDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default ProductModel;
//# sourceMappingURL=productModel.d.ts.map