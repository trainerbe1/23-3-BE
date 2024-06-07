import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { login, logout, register } from "../services/auth_service.js";

const authRouter = Router();

authRouter.delete('/auth/logout/:token', async (req, res, next) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Delete user session'

    return res.send(await logout(req, res, next));
});

authRouter.post('/auth/register', async (req, res, next) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Create a new user'

    return res.send(await register(req, res, next));
});

authRouter.post('/auth/login', async (req, res, next) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Create new session'

    return res.send(await login(req, res, next));
});

export default authRouter;