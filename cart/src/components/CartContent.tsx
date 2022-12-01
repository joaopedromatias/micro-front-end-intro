import React, { useState, useEffect } from 'react'
import { cartState, clearCart } from '../cart'
import styled from 'styled-components'
import Header from 'home/Header'
import Button from 'home/Button'

export interface ProductCart { 
    name: string,
    id: number,
    price: number
    image_url: string
    quantity: 1
}

export default function CartContent () { 

    const [cart, setCart] = useState<ProductCart[] | undefined>(undefined)
    const [cartPrice, setCartPrice] = useState<number | null>(null)

    useEffect(() => { 
        setCart(typeof cartState.value === 'object' ? cartState.value as ProductCart[] : undefined);
        cartState.subscribe(cart => {
            setCart(cart as ProductCart[])
        });
    }, []);

    useEffect(() => { 
        if (cart && cart.length > 0) { 
            let total = 0;
            cart!.forEach(product => { 
                total += product.price * product.quantity
            })
            setCartPrice(total)
        }
    }, [cart])

    return <>
        <Header />
        <Wrapper>{ cart && cart.length > 0 ?
        <>
        {cart.map((product, index) => {
            return <><div className='product-cart' key={index}>
                <img src={product.image_url} alt={product.name} />
                <p id='name'>{product.name}</p>
                <p id='price'><strong>$ {product.price}</strong></p>
                <p>Quantity: <strong>{product.quantity}</strong></p>
            </div>
            <hr />
            </>
        })}
        <div className='cart-bottom'>
            <Button onClick={clearCart} text='clear cart' visible={true}>clear cart</Button>
            <div id='total'>{cartPrice ? <>Total: <strong>{`$`+cartPrice.toFixed(2)}</strong> </>: <></>}</div>
        </div>
        </>
        :
        <div id='empty'>Your cart is empty</div>
        }       
        </Wrapper>
    </>
}

const Wrapper = styled.div`
padding-top: 10px;
max-width: 60%;
margin: auto;
margin-top: 50px;
text-align: center;
hr { 
    
    border: .5px solid lightgray;
}
#empty { 
    margin-left: 10px;
    letter-spacing: 0.9px;
}
.product-cart { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    margin: 18px 10px;
    p { 
        font-size: 1.1rem;
        margin: 10px;
    }
    img { 
        width: 130px;
        aspect-ratio: 16/11;
        border-radius: 10px;
    }
    #price {
        width: 60px;
    }
    #name { 
        width: 100px;
    }
}
.cart-bottom { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
    #total { 
        font-size: 1.2rem;
        letter-spacing: 1.1px;
        text-align: right;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        button { 
            margin-left: 150px;
        }
    }
}
`