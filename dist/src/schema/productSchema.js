import { object, number, string } from "zod";
const payload = {
    body: object({
        title: string().nonempty("Title is required"),
        description: string().nonempty("Description is required").min(120, "Description should be at least 120 characters long"),
        price: number().nonnegative(),
        image: string().nonempty("Image is required"),
    })
};
const params = {
    params: object({
        productId: string().nonempty("productId is required"),
    })
};
export const createProductSchema = object({
    ...payload
});
export const updateProductSchema = object({
    ...payload,
    ...params,
});
export const deleteProductSchema = object({
    ...params,
});
export const getProductSchema = object({
    ...params,
});
//# sourceMappingURL=productSchema.js.map