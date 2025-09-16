import { createUserHandler } from "./controller/userController.js";
import validateResource from "./middleware/validateResource.js";
import { createUserSchema } from "./schema/userSchema.js";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "./controller/sessionController.js";
import { createSessionSchema } from "./schema/sessionSchema.js";
import requireUser from "./middleware/requireUser.js";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/productSchema.js";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/productController.js";
function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);
    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);
    app.get("/api/sessions", requireUser, getUserSessionsHandler);
    app.delete("/api/sessions", requireUser, deleteSessionHandler);
    app.post("/api/products", [requireUser, validateResource(createProductSchema)], createProductHandler);
    app.get("/api/products/:productId", validateResource(getProductSchema), getProductHandler);
    app.put("/api/products/:productId", [requireUser, validateResource(updateProductSchema)], updateProductHandler);
    app.delete("/api/products/:productId", [requireUser, validateResource(deleteProductSchema)], deleteProductHandler);
}
export default routes;
//# sourceMappingURL=routes.js.map