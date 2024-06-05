import { Router } from "express";
import authController from "../controllers/auth_controller.js";

const authRouters = Router();

authRouters.use('/v1/auth', authController);

export default authRouters;