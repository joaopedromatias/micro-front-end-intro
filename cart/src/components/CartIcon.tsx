import React, { useState, useEffect } from 'react'
import { cartState } from '../cart';
import { ProductCart } from './CartContent';
import Cart from '../icons/Cart'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CartIcon () { 

    const [cart, setCart] = useState<ProductCart[] | undefined>(undefined)

    useEffect(() => { 
        setCart(typeof cartState.value === 'object' ? cartState.value as ProductCart[] : undefined);
        cartState.subscribe(cart => {
            setCart(cart as ProductCart[])
        });
    }, []);

    return <Wrapper>
        <Link to='/cart'>
            <Cart />
        </Link>
        <span id='amount'>
            {cart ? <div>{cart.length}</div> : <></>}
        </span>
    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
align-items: flex-start;
padding: 5px;
#amount { 
    color: #ffffff;
    line-height: 0px;
}
`