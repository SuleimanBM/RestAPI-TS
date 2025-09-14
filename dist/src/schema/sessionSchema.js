import { email, object, string } from "zod";
export const createSessionSchema = object({
    body: object({
        email: email("Invalid email email and email address").nonempty("Email is required"),
        password: string().nonempty("Password is required"),
    })
});
//# sourceMappingURL=sessionSchema.js.map