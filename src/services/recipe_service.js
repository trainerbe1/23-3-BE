import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";
import APIPagingResponse from "../common/api_paging_response.js";

export async function getRecipes(req, res, next) {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const recipes = await prismaClient.recipes.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: {
                category: true
            }
        });

        const totalPages = Math.ceil(await prismaClient.recipes.count() / pageSize);

        return apiResponse(apiMessage.success, APIPagingResponse(page, pageSize, totalPages, recipes));
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}