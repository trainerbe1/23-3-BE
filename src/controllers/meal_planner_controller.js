import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";
import { addMealPlan, deleteMealPlan, getMealPlans, getMealPlansByDate } from "../services/meal_planner_service.js";

const mealPlannerRouter = Router();

mealPlannerRouter.post('/meal-plans', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Meal Plans']
    // #swagger.description = 'Add a meal plan'

    return res.send(await addMealPlan(req, res, next));
});

mealPlannerRouter.delete('/meal-plans/:id', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Meal Plans']
    // #swagger.description = 'Delete a meal plan'

    return res.send(await deleteMealPlan(req, res, next));
});

mealPlannerRouter.get('/meal-plans', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Meal Plans']
    // #swagger.description = 'Get meal plans by logged in user'

    return res.send(await getMealPlans(req, res, next));
});

mealPlannerRouter.get('/meal-plans/date/:date', isAuthorized, async (req, res, next) => {
    // #swagger.tags = ['Meal Plans']
    // #swagger.description = 'Get meal plans by date and logged in user'

    return res.send(await getMealPlansByDate(req, res, next));
});

export default mealPlannerRouter;