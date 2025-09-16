import {object,number, string, z} from "zod";


const payload = {
    body: object({
        title: string().nonempty("Title is required"),
        description: string().nonempty("Description is required").min(120, "Description should be at least 120 characters long"),
        price: number().nonnegative(),
        image: string().nonempty("Image is required"),
    })
}

const params = {
    params: object({
        productId: string().nonempty("productId is required"),
    })
}

export const createProductSchema = object ({
    ...payload
})
export const updateProductSchema = object ({
    ...payload,
    ...params,
})
export const deleteProductSchema = object ({
    ...params,
})
export const getProductSchema = object ({
    ...params,
})

export type createProductInput = z.infer<typeof createProductSchema>
export type updateProductInput = z.infer<typeof updateProductSchema>
export type readProductInput = z.infer<typeof getProductSchema>
export type deleteProductInput = z.infer<typeof deleteProductSchema>