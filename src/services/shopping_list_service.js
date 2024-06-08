import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function addShoppingList(req, res, next) {
    try {
        const recipe = await prismaClient.recipes.findFirst({
            where: {
                id: Number(req.params.id)
            }
        });
        
        if(recipe == null) {
            return apiResponse(apiMessage.invalidInput, null, {
                id: 'Recipe not found'
            });
        }

        const shoppingList = await prismaClient.shopping_lists.create({
            data: {
                name: recipe.name,
                user_id: res.payload.id
            }
        });

        for(const item of recipe.ingredient.split('|')) {
            if(shoppingList != null) {
                await prismaClient.shopping_list_items.create({
                    data: {
                        name: item,
                        shopping_list_id: shoppingList.id,
                    }
                });
            }
        }

        return apiResponse(apiMessage.success, shoppingList);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function deleteShoppingList(req, res, next) {
    try {
        const checkShoppingList = await prismaClient.shopping_lists.findFirst({
            where: {
                id: Number(req.params.id)
            }
        });

        if(checkShoppingList == null) {
            return apiResponse(apiMessage.invalidInput, null, {
                id: 'Shopping list is not found'
            });
        }
        
        await prismaClient.shopping_list_items.deleteMany({
            where: {
                shopping_list_id: Number(req.params.id)
            }
        });

        await prismaClient.shopping_lists.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        return apiResponse(apiMessage.success, checkShoppingList);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getShoppingLists(req, res, next) {
    try {
        const shoppingLists = await prismaClient.shopping_lists.findMany({
            where: {
                user_id: res.payload.id
            }
        });

        return apiResponse(apiMessage.success, shoppingLists);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}