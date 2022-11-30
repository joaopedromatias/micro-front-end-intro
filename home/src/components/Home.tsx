import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchData from '../utils/fetch'

export default function () { 

    const [products, setProducts] = useState<Products[] | undefined>(undefined);

    useEffect(() => { 
        const response = fetchData('http://localhost', 3002, '/api/products');
        response.then(({ data }) => setProducts(data));
    }, [])

    return <Wrapper>
        <div className="grid">
            {Array.isArray(products) ? products.map(product => {
                return <div className='product-card'>
                    <h4>{product.name}</h4>
                    <img src={product.image_url} alt={product.name} />
                    <p>$ {product.price}</p>
                </div>
            }): <></>}
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
div.grid { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 120px;
    margin-top: 20px;
    div.product-card { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        margin-bottom: 15px;
        img { 
            width: 320px;
        }
    }
}
`