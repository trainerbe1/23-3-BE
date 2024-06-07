import prismaClient from "../common/prisma.js";
import apiResponse from "../common/api_response.js";
import apiMessage from "../common/api_message.js";
import bcrypt from "bcrypt";
import jwt from "../common/jwt.js";
import jsonwebtoken from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';
import SHA256 from "crypto-js/sha256.js";

export async function register(req, res, next) {
    try {
        const userWithUsername = await prismaClient.users.findFirst({
            where: {
                username: req.body.username
            }
        });
    
        if(userWithUsername != null) {
            return apiResponse(apiMessage.invalidInput, null, {
                username: 'Username already taken'
            });
        }
        
        if(req.body.password != req.body.repeatPassword) {
            return apiResponse(apiMessage.invalidInput, null, {
                repeatPassword: 'Password missmatch'
            });
        }
        
        if(req.body.password.length < 5) {
            return apiResponse(apiMessage.invalidInput, null, {
                repeatPassword: 'Password must be at least 6 characters'
            });
        }
    
        const password = bcrypt.hashSync(req.body.password, 10);
    
        const user = await prismaClient.users.create({
            data: {
                username: req.body.username,
                password
            }
        });
    
        return apiResponse(apiMessage.success, user);
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function logout(req, res, next) {
    try {
        await prismaClient.sessions.deleteMany({
            where: {
                token: SHA256(req.params.token).toString()
            }
        });
    
        return apiResponse(apiMessage.success);
    } catch (error) {
        console.error(error);
        return apiResponse(apiMessage.internalServerError);
    }
}

export async function login(req, res, next) {
    try {
        const userWithUsername = await prismaClient.users.findFirst({
            where: {
                username: req.body.username
            }
        });
    
        if(userWithUsername == null) {
            return apiResponse(apiMessage.invalidInput, null, {
                username: 'Username doesnt exist'
            });
        }
        
        if(!bcrypt.compareSync(req.body.password, userWithUsername.password)) {
            return apiResponse(apiMessage.invalidInput, null, {
                repeatPassword: 'Password is wrong'
            });
        }
    
        const accessToken = jsonwebtoken.sign({
            id: userWithUsername.id,
            username: userWithUsername.username,
            role: userWithUsername.role
        }, jwt.secret, {expiresIn: jwt.exp});
    
        const refreshToken = uuidv4();
    
        await prismaClient.sessions.create({
            data: {
                token: SHA256(refreshToken).toString(),
                user_id: userWithUsername.id
            }
        });
    
        return apiResponse(apiMessage.success, {
            accessToken,
            refreshToken,
            id: userWithUsername.id,
            username: userWithUsername.username
        });
    } catch (error) {
        return apiResponse(apiMessage.internalServerError);
    }
}