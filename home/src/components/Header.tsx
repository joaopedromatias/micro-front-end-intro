import React from 'react'
import styled from 'styled-components'
import CartIcon from 'cart/CartIcon'

export default function () { 
    return <Wrapper>
        <span>Micro Front End</span>         
        <div className='holder'>
            <CartIcon />
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
margin: 0;
text-align: center;
width: 100%;
height: 85px;
background-color: #0b0b0b;
color: white;
letter-spacing: 4px;
text-transform: capitalize;
span { 
    display: inline;
    height: 85px;
    font-size: 1.2rem;
    line-height: 85px;
}
.holder { 
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
}
`