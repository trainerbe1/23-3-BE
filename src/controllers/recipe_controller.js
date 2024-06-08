import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { login, logout, refreshAccessToken, register } from "../services/auth_service.js";
import { getRecipes } from "../services/recipe_service.js";

const recipeRouter = Router();

recipeRouter.get('/recipes', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Get recipes'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getRecipes(req, res, next));
});

export default recipeRouter;