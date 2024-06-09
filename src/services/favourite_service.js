import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";

export async function addFavourite(req, res, next) {
    try {
        const favourite = await prismaClient.favourites.create({
            data: {
                recipe_id: Number(req.params.id),
                user_id: res.payload.id
            },
            include: {
                recipe: {
                    include: {
                        category: true,
                        area: true,
                        favourites: true
                    }
                }
            }
        });

        return apiResponse(apiMessage.success, favourite);
    } catch (error) {
        console.error(error);
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function deleteFavourite(req, res, next) {
    try {
        const favourite = await prismaClient.favourites.delete({
            where: {
                id: Number(req.params.id)
            },
            include: {
                recipe: {
                    include: {
                        category: true,
                        area: true,
                        favourites: true
                    }
                }
            }
        });

        return apiResponse(apiMessage.success, favourite);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function getFavourites(req, res, next) {
    try {
        const favourites = await prismaClient.favourites.findMany({
            where: {
                user_id: res.payload.id
            },
            include: {
                recipe: {
                    include: {
                         area: true,
                         category: true,
                    }
                }
            }
        });

        return apiResponse(apiMessage.success, favourites);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}