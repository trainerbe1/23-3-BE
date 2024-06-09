import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function getCategories(req, res, next) {
    try {
        const categories = await prismaClient.categories.findMany({
            include: {
                recipes: true
            }
        });
        return apiResponse(apiMessage.success, categories);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}
