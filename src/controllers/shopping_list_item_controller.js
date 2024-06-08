import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { getShoppingListItems, updateShoppingListItem } from "../services/shopping_list_item_service.js";

const shoppingListItemRouter = Router();

shoppingListItemRouter.put('/shopping-list-items/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping List Items']
    // #swagger.description = 'Update a shopping list item'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await updateShoppingListItem(req, res, next));
});

shoppingListItemRouter.get('/shopping-list-items/shopping-lists/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping List Items']
    // #swagger.description = 'Get shopping list items by shopping list'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getShoppingListItems(req, res, next));
});

export default shoppingListItemRouter;