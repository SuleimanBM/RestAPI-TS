import { createUserHandler } from "./controller/userController.js";
import validateResource from "./middleware/validateResource.js";
import { createUserSchema } from "./schema/userSchema.js";
import { createUserSessionHandler, getUserSessionsHandler } from "./controller/sessionController.js";
import { createSessionSchema } from "./schema/sessionSchema.js";
import requireUser from "./middleware/requireUser.js";
function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);
    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);
    app.get("/api/sessions", requireUser, getUserSessionsHandler);
}
export default routes;
//# sourceMappingURL=routes.js.map