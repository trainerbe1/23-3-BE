import { Router } from 'express'
import authController from "../controllers/auth_controller.js";

const authRoutes = Router();

authRoutes.use('/v1/', authController);

export default authRoutes;