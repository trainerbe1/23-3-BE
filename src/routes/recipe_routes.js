import { Router } from 'express'
import recipeController from "../controllers/recipe_controller.js";

const recipeRoutes = Router();

recipeRoutes.use('/v1/', recipeController);

export default recipeRoutes;