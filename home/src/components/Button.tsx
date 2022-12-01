import React from 'react'
import styled from 'styled-components'

interface Props { 
    type: 'primary' | 'secondary'
    text: string
    visible: boolean
    onClick?: () => void
    style?: object
}

interface WrapperProps { 
    type: string
    visible: boolean
}

export default function Button({type, text, visible, style, onClick}: Props) { 
    return <Wrapper type={type} visible={visible}>
        <button onClick={onClick} style={style}>{text}</button>
    </Wrapper>
}

const Wrapper = styled.div<WrapperProps>`
text-align: center;
button { 
    transition: all linear .2s;
    opacity: ${ ({visible}) => visible ? 1 : 0};
    border: none;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 10px 20px;
    background-color: #060606;
    margin-bottom: 10px;
    color: white;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 0.9rem;
    :hover { 
        transition: all linear .05s;
        background-color: #323232;
    }
}
`