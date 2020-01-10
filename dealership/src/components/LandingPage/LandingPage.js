import React from 'react'
import Card from '../Card/Card';
import styled from 'styled-components'
import {flexColumnDiv} from '../styledComponents'

const LandingPageWrapper = styled(flexColumnDiv) `
    display: flex;
    flex-direction: 
    width: 80%;
    margin: 20px;
`


 function LandingPage(props) {
    return (
        <LandingPageWrapper>
        {props.data.map((car) => {
            return <Card key={car.vin} car={car}/>
        })}
            
        </LandingPageWrapper>
    )
}


export default LandingPage