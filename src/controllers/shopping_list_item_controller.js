import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { updateShoppingListItem } from "../services/shopping_list_item_service.js";

const shoppingListItemRouter = Router();

shoppingListItemRouter.put('/shopping-list-item/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Shopping List Item']
    // #swagger.description = 'Update a shopping list item'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await updateShoppingListItem(req, res, next));
});

export default shoppingListItemRouter;