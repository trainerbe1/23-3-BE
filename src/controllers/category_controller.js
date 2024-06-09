import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { getCategories } from "../services/category_service.js";

const categoryController = Router();

categoryController.get('/categories', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Categories']
    // #swagger.description = 'Get categories'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getCategories(req, res, next));
});

export default categoryController;