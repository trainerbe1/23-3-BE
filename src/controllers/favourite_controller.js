import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { addFavourite, deleteFavourite, getFavourites } from "../services/favourite_service.js";

const favouriteRouter = Router();

favouriteRouter.post('/favourites/recipes/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Favourites']
    // #swagger.description = 'Add a new favourite'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await addFavourite(req, res, next));
});

favouriteRouter.delete('/favourites/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Favourites']
    // #swagger.description = 'Delete a favourite'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await deleteFavourite(req, res, next));
});

favouriteRouter.get('/favourites', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Favourites']
    // #swagger.description = 'Get user favourites'
     // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getFavourites(req, res, next));
});

export default favouriteRouter;