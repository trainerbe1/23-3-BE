import { Router } from 'express'
import favouriteRouter from '../controllers/favourite_controller.js';

const favouriteRoutes = Router();

favouriteRoutes.use('/v1/', favouriteRouter);

export default favouriteRoutes;