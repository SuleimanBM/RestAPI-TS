import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        password: z.ZodString;
        passwordConfirmation: z.ZodString;
        email: z.ZodEmail;
    }, z.core.$strip>;
}, z.core.$strip>;
export type createUserInput = Omit<z.infer<typeof createUserSchema>, "body.passwordConfirmation">;
//# sourceMappingURL=userSchema.d.ts.map