import React from 'react'
import styled from 'styled-components'
import Star from '../icons/Star'

export default function () { 
    return <Wrapper>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
    </Wrapper>   
}

const Wrapper = styled.div`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 8px;
`