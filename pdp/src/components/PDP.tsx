import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getProduct from 'home/getProduct'
import { useParams } from 'react-router-dom'
import Rate from './Rate'
import Button from 'home/Button'
import { addToCart } from 'cart/cart'

export default function PDP () { 

    const [product, setProduct] = useState<any>({} as any)

    const { id } = useParams();

    useEffect(() => { 
        const res = getProduct(id);
        res.then(({data}) => setProduct(data))
    }, [])

    return <Wrapper>
        <div className='grid'>
            <div id='image'>
                <img src={product.image_url} alt={product.name} />
            </div>
            <div className='product-info'>
                <div className='flex'>
                    <div className='flex-v'>
                        <h2 id='title'>{product.name}</h2>
                        <Rate />
                    </div>
                    <h3 id='price'>$ {product.price}</h3>
                </div>
                <hr className='line'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga beatae doloremque itaque dolorum cum deserunt! Minus, cupiditate numquam illo atque aspernatur veniam, repellat architecto veritatis pariatur cumque placeat necessitatibus!</p>
                <Button onClick={() => addToCart(product.id)} text='add to cart' visible={true} type='primary'/>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
margin: 0 15vw;
margin-top: 110px;
.grid { 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
    #image {
        img { 
            height: 300px;
            aspect-ratio: 16/9;
            border-radius: 10px;
            box-shadow: 2px 2px 3px lightgray;
        }
    }
    .product-info {
        display: inline;
        vertical-align: top;
        .flex { 
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            .flex-v { 
                display: flex;
                flex-direction: column;
                align-items: baseline;
                #title { 
                    font-family: cursive;
                    margin: 0px;
                    font-size: 2rem;
                    margin-bottom: 5px;
                }
            }
            #price { 
                margin: 0px;
                letter-spacing: 0.8px;
                margin-bottom: 5px;
            }
        }
        .line { 
            width: 95%;
            border: lightgray 0.5px solid;
            margin-top: 0;
            margin-bottom: 40px;
        }
        p { 
            margin-bottom: 25px;
        }
    }
    }
`