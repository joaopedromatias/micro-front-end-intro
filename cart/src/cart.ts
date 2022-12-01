import { BehaviorSubject } from "rxjs";

export const cartState = new BehaviorSubject({});

export async function getCart () { 
    const res = await fetch(`http://localhost:3002/cart`);
    const { cart } = await res.json();
    if (cart) { 
        cartState.next(cart); 
    }
}

export async function addToCart (productId) { 

    const res = await fetch(`http://localhost:3002/cart/${productId}`, { 
        method: 'POST'
    });

    const { sucess } = await res.json();

    if (sucess) { 
        await getCart(); 
    }
}

getCart();