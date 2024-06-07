import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { login, register } from "../services/auth_service.js";

const authRouter = Router();

authRouter.post('/auth/register', register);
authRouter.post('/auth/login', login);

export default authRouter;