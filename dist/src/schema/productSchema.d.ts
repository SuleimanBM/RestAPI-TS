import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        price: z.ZodNumber;
        image: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    params: z.ZodObject<{
        productId: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        price: z.ZodNumber;
        image: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const deleteProductSchema: z.ZodObject<{
    params: z.ZodObject<{
        productId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const getProductSchema: z.ZodObject<{
    params: z.ZodObject<{
        productId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type createProductInput = z.infer<typeof createProductSchema>;
export type updateProductInput = z.infer<typeof updateProductSchema>;
export type readProductInput = z.infer<typeof getProductSchema>;
export type deleteProductInput = z.infer<typeof deleteProductSchema>;
//# sourceMappingURL=productSchema.d.ts.map