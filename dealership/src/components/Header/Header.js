import React from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
height: 20vh;
background-color: crimson;
`

const StyledH1 = styled.h1 `
font-size: 3.6rem;
color: white;
`

const LambdaLink = styled.a `
text-decoration: none;
cursor: pointer;
font-size: 1.8rem;
color: white;
hover &{
    font-weight: bolder;
    font-size: 2rem;
}
`

 function Header() {
    return (
        <HeaderWrapper>
            <StyledH1>Lambda Car Dealership</StyledH1>
            <LambdaLink href="https://www.lambdaschool.com">Lambda School</LambdaLink>
        </HeaderWrapper>
    )
}

export default Header