import { Request, Response } from "express";
import data from '../data'
import { Product, Cart } from '../types'

let cart: Cart = []

export function getCart (req: Request, res: Response) { 
    res.status(200).json({ cart: cart });
}

export function addToCart (req: Request, res: Response) { 
    const { productId } = req.params;
    
    const productToAdd: Product | undefined = data.find(product => product.id === Number(productId));

    if (productToAdd) { 

        const productCardIndex = cart.findIndex(product => product.id === Number(productId))

        if (productCardIndex === -1) { 
            cart.push({...productToAdd, quantity: 1});
        } else { 
            const currentQuantity = cart[productCardIndex].quantity;
            const newQuantity = currentQuantity + 1
            cart[productCardIndex] = {...cart[productCardIndex], quantity: newQuantity}
        }

        return res.status(201).json({ sucess: true });
    } 

    return res.status(404).json({ sucess: false });
}