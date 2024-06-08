import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { addShoppingList, deleteShoppingList, getShoppingLists } from "../services/shopping_list_service.js";

const shoppingListRouter = Router();

shoppingListRouter.post('/shopping-lists/recipes/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping Lists']
    // #swagger.description = 'Add a new shopping list'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await addShoppingList(req, res, next));
});

shoppingListRouter.delete('/shopping-lists/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping Lists']
    // #swagger.description = 'Delete a shopping list'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await deleteShoppingList(req, res, next));
});

shoppingListRouter.get('/shopping-lists', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping Lists']
    // #swagger.description = 'Get shopping lists'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getShoppingLists(req, res, next));
});

export default shoppingListRouter;