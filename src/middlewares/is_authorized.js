import apiMessage from "../common/api_message.js";
import APIResponse from "../common/api_response.js";
import jsonwebtoken from "jsonwebtoken";
import jwt from "../common/jwt.js";

export default function isAuthorized(req, res, next) {
    try {
        if('authorization' in req.headers) {
            const bearerHeader = req.headers.authorization.split(' ');

            if(bearerHeader.length === 2 && bearerHeader[0] === 'Bearer') {
                const payload = jsonwebtoken.verify(bearerHeader[1], jwt.secret);
                if(payload) {
                    res.payload = payload;
                    return next();
                }
                
                return res.send(APIResponse(apiMessage.unauthorized));
            }
            return res.send(APIResponse(apiMessage.unauthorized));
        }
        
        return res.send(APIResponse(apiMessage.unauthorized));
    } catch (error) {
        return res.send(APIResponse(apiMessage.unauthorized));
    }
}