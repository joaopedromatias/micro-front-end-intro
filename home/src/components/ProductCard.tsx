import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button';

export default function ProductCard ({ name, price, image_url, id}) { 
    const [buttonVisible, setButtonVisible] = useState<boolean>(false);

    return <Wrapper>
        <div className='product-card' onMouseOver={() => setButtonVisible(true)} onMouseOut={() => setButtonVisible(false)}>
            <h3 id='title'>{name}</h3>
            <img src={image_url} alt={name} />
            <span id='price'><strong>$ {price}</strong></span>
            <Button type='primary' text='add to cart' visible={buttonVisible}></Button>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
div.product-card { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 15px;
    img { 
        width: 320px;
        aspect-ratio: 16/11;
    }
    #price { 
        margin-top: 0px;
        font-size: 1.1rem;
    }
    &:hover {
        box-shadow: 1px 2px 3px darkgray;
        cursor: pointer;
    }
}
`