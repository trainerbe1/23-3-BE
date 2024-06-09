import { Router } from 'express'
import userController from "../controllers/user_controller.js";

const userRoutes = Router();

userRoutes.use('/v1/', userController);

export default userRoutes;