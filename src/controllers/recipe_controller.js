import { Router } from "express";
import isAdmin from "../middlewares/is_admin.js";
import isAuthorized from "../middlewares/is_authorized.js";
import { login, logout, refreshAccessToken, register } from "../services/auth_service.js";
import { addRecipe, deleteRecipeById, getRecipeById, getRecipes, getRecipesByCategoryId, getRecipesByName } from "../services/recipe_service.js";

const recipeRouter = Router();

recipeRouter.get('/recipes', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Get recipes'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getRecipes(req, res, next));
});

recipeRouter.post('/recipes', isAdmin, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Add a new recipe'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await addRecipe(req, res, next));
});

recipeRouter.delete('/recipes/:id', isAdmin, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Delete recipe by id'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await deleteRecipeById(req, res, next));
});

recipeRouter.get('/recipes/categories/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Get recipes by category id'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getRecipesByCategoryId(req, res, next));
});

recipeRouter.get('/recipes/name/:name', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Get recipes by matching name'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getRecipesByName(req, res, next));
});

recipeRouter.get('/recipes/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Recipes']
    // #swagger.description = 'Get recipes by matching name'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getRecipeById(req, res, next));
});

export default recipeRouter;