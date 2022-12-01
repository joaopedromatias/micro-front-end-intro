export interface Product { 
    name: string,
    id: number,
    price: number
    image_url: string
}

export interface ProductCart { 
    name: string,
    id: number,
    price: number
    image_url: string
    quantity: number
}

export type Cart = ProductCart[]