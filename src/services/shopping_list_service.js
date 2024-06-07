import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function addList(req, res, next) {
    try {
        const recipe = await prismaClient.recipes.findFirst({
            where: {
                id: req.params.id
            }
        });
        
        if(recipe == null) {
            return apiResponse(apiMessage.invalidInput, null, {
                id: 'Recipe not found'
            });
        }

        return apiResponse(apiMessage.success);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}