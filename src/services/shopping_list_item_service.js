import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function updateShoppingListItem(req, res, next) {
    try {
        const shoppingListItem = await prismaClient.shopping_list_items.findFirst({
            where: {
                id: Number(req.params.id)
            }
        });
        
        if(shoppingListItem == null) {
            return apiResponse(apiMessage.invalidInput, null, {
                id: 'Item not found'
            });
        }

        const item = await prismaClient.shopping_list_items.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                is_done: req.body.isDone
            }
        });

        return apiResponse(apiMessage.success, item);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getShoppingListItems(req, res, next) {
    try {
        const shoppingListItem = await prismaClient.shopping_list_items.findMany({
            where: {
                shopping_list_id: Number(req.params.id)
            }
        });

        return apiResponse(apiMessage.success, shoppingListItem);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}