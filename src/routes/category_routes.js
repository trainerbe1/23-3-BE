import { Router } from 'express';
import categoryController from "../controllers/category_controller.js";

const categoryRoutes = Router();

categoryRoutes.use('/v1/', categoryController);

export default categoryRoutes;