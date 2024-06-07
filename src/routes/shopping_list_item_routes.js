import { Router } from 'express'
import shoppingListItemRouter from '../controllers/shopping_list_item_controller.js';

const shoppingListItemRoutes = Router();

shoppingListItemRoutes.use('/v1/', shoppingListItemRouter);

export default shoppingListItemRoutes;