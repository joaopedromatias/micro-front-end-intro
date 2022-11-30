import { Request, Response } from "express";
import data from '../data'

export const getAllProducts = (req: Request, res: Response) => { 
    return res.status(200).json({sucess: true, data: data })
}

export const getProduct = (req: Request, res: Response) => { 

    const { id } = req.params

    const product = data.find(product => product.id === Number(id))

    if (product) { 
        return res.status(200).json({sucess: true, data: product })
    } 
    return res.status(404).json({sucess: false, message: 'product not found' })
}