import { Router } from 'express'
import authController from "../controllers/auth_controller.js";

const authRouter = Router();

authRouter.use('/v1/', authController);

export default authRouter;