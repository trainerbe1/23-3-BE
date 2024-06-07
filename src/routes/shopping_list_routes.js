import { Router } from 'express'
import shoppingListRouter from '../controllers/shopping_list_controller.js';

const shoppingListRoutes = Router();

shoppingListRoutes.use('/v1/', shoppingListRouter);

export default shoppingListRoutes;