import { Router } from "express";
import { deleteUser, getUsers } from "../services/user_service.js";
import isAdmin from "../middlewares/is_admin.js";

const authRouter = Router();

authRouter.delete('/users/:id', isAdmin, async (req, res, next) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Delete an user'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await deleteUser(req, res, next));
});

authRouter.get('/users', isAdmin, async (req, res, next) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Get  users'
    // #swagger.security = [{ "apiKeyAuth": [] }]

    return res.send(await getUsers(req, res, next));
});

export default authRouter;