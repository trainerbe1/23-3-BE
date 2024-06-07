import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { addShoppingList, deleteShoppingList } from "../services/shopping_list_service.js";

const shoppingListRouter = Router();

shoppingListRouter.post('/shopping-list/recipes/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping List']
    // #swagger.description = 'Add a new shopping list'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await addShoppingList(req, res, next));
});

shoppingListRouter.delete('/shopping-list/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping List']
    // #swagger.description = 'Delete a shopping list'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await deleteShoppingList(req, res, next));
});

export default shoppingListRouter;