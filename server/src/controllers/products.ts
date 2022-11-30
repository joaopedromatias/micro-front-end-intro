import { Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response) => { 
    return res.status(200).json({sucess: true, data: 'product array goes here'})
}