import { Router } from "express";
import isAuthorized from "../middlewares/is_authorized.js";

const authRouter = Router();

authRouter.post('/auth/signin', (req, res, next) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    res.status(201).json({
        data: [],
        message: 'Authentication success'
    })
})

authRouter.route('/auth/users/:id').get(isAuthorized, (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to get a specific user.' 
    const users = []
    const data = users.find(e => e.id === req.params.id)

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User registered successfully." } */
    res.status(200).json({
        data: [],
        message: 'Successfully found'
    })
})

export default authRouter;