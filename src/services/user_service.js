import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";
import APIPagingResponse from "../common/api_paging_response.js";

export async function deleteUser(req, res, next) {
    try {
        const user = await prismaClient.users.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        return apiResponse(apiMessage.success, user);
    } catch (error) {
        console.error(error);
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getUsers(req, res, next) {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const users = await prismaClient.users.findMany({
            where: {
                role: 'USER'
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: {
                favourites: true,
                meal_plans: true,
                sessions: true,
                shopping_lists: true,
            }
        });

        const totalPages = Math.ceil(await prismaClient.users.count() / pageSize);

        return apiResponse(apiMessage.success, APIPagingResponse(page, pageSize, totalPages, users));
    } catch (error) {
        console.error(error);
        return apiResponse(apiMessage.internalServerError);
    }
}