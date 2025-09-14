import { object, string, email } from 'zod';
export const createUserSchema = object({
    body: object({
        name: string({
            error: "Name is required",
        }).min(3, { message: "Name must 3 or more characters" }),
        password: string({
            error: "Password is required"
        }).min(6, "Password too short - should be 6 chars minimum"),
        passwordConfirmation: string({
            error: "Password confirmation is required"
        }),
        email: email({ error: "Not a valid email" })
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    })
});
//# sourceMappingURL=userSchema.js.map