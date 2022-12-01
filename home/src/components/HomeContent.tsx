import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchAllProducts from '../utils/fetchAllProducts'
import ProductCard from './ProductCard';
import Header from './Header';
import HomeHolder from './HomeHolder';

export default function HomeContent () { 

    const [products, setProducts] = useState<Products[] | undefined>(undefined);

    useEffect(() => { 
        const response = fetchAllProducts();
        response.then(({ data }) => setProducts(data));
    }, [])

    return <>
    <Header />
        <HomeHolder>
            <Wrapper>
                <div className="grid">
                    {Array.isArray(products) ? products.map(product => {
                        return <ProductCard {...product} />
                    }): <></>}
                </div>
            </Wrapper>
        </HomeHolder>
        </>
}

const Wrapper = styled.div`
div.grid { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 120px;
    margin-top: 20px;
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
}
`