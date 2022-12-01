import React, { useState } from 'react'
import styled from 'styled-components'

interface Props { 
    type: 'primary' | 'secondary'
    text: string
    visible: boolean
}

interface WrapperProps { 
    type: string
    visible: boolean
}

export default function Button({type, text, visible}: Props) { 
    return <Wrapper type={type} visible={visible}>
        <button>{text}</button>
    </Wrapper>
}

const Wrapper = styled.div<WrapperProps>`
button { 
    transition: all linear .2s;
    opacity: ${ ({visible}) => visible ? 1 : 0};
    border: none;
    border-radius: 10px;
    text-transform: capitalize;
    padding: 10px 20px;
    background-color: #529252;
    margin-bottom: 10px;
    color: white;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 0.9rem;
    :hover { 
        background-color: #71a771;
    }
}
`