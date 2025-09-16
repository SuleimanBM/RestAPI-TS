import ProductModel from "../models/productModel.js";
export async function createProduct(input) {
    return await ProductModel.create(input);
}
export async function findProduct(query, options = { lean: true }) {
    return await ProductModel.findOne(query, {}, options);
}
export async function findAndUpdateProduct(query, update, options) {
    return await ProductModel.findOneAndUpdate(query, update, options);
}
export async function deleteProduct(query) {
    return await ProductModel.deleteOne(query);
}
//# sourceMappingURL=productService.js.map