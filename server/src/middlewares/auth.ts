import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default function auth (req: Request, res: Response, next: NextFunction) { 

    const { authentication } = req.headers
        
    if (authentication) {   
        const token = (authentication as string).replace('Bearer ', '')
        try { 
            jwt.verify(token, process.env.JWT_SECRET!);
            next();
        } catch {
            res.status(401).send('Invalid token');
        }
        return null
    }
    res.status(401).send('You are not logged in');
}