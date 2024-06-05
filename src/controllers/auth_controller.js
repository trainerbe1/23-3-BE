import { Router } from "express";
import authLogin from "../services/auth_service.js";

const authController = Router();

authController.get('/login', authLogin);

export default authController;