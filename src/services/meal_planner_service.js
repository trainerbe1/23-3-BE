import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function addMealPlan(req, res, next) {
    try {
        const mealPlan = await prismaClient.meal_plans.create({
            data: {
                date_string: req.body.dateString,
                recipe_id: req.body.recipeId,
                user_id: res.payload.id
            },
            include: {
                recipe: {
                    include: {
                        category: true
                    }
                }
            }
        });
    
        return apiResponse(apiMessage.success, mealPlan);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getMealPlans(req, res, next) {
    try {
        const mealPlans = await prismaClient.meal_plans.findMany({
            where: {
                user_id: res.payload.id
            },
            include: {
                recipe: true
            }
        });
    
        return apiResponse(apiMessage.success, mealPlans);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getMealPlansByDate(req, res, next) {
    try {
        const mealPlans = await prismaClient.meal_plans.findMany({
            where: {
                date_string: req.params.date, 
                user_id: res.payload.id
            },
            include: {
                recipe: {
                    include: {
                        category: true,
                    }
                }
            }
        });
    
        return apiResponse(apiMessage.success, mealPlans);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function deleteMealPlan(req, res, next) {
    try {
        const mealPlan = await prismaClient.meal_plans.delete({
            where: {
                id: Number(req.params.id)
            }
        });
    
        return apiResponse(apiMessage.success, mealPlan);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}