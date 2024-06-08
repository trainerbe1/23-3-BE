import { Router } from 'express'
import mealPlannerRouter from '../controllers/meal_planner_controller.js';

const mealPlannerRoutes = Router();

mealPlannerRoutes.use('/v1/', mealPlannerRouter);

export default mealPlannerRoutes;