import React from 'react'
import styled from 'styled-components'

interface Props { 
    children: JSX.Element
}

export default function HomeHolder ({ children }: Props) { 
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`