import React from 'react';
import picture from '../../comingSoon.jpg';
import styled from 'styled-components'


const Wrapper = styled.div ` 
display: flex; 
width: 28%;
flex-direction: column;
background-color: black;
align-items: center;
height: 45vh;
margin: 2%
`
 const Image = styled.img `
width: 70%;
height: 200px;
border: 3px solid crimson;
margin: 20px;
`

const Para = styled.p ` 
font-size: 1.4rem;
color: white;
`





function Card(props) {
	return (
		<Wrapper>
			<Image src={picture}></Image>
			<Para>Make: {props.car.make}</Para>
			<Para>Year: {props.car.year}</Para>
            <Para>Model: {props.car.model}</Para>
            <Para>Miles: {Math.round(Math.random() *100000)}</Para>
			<Para>Price ${props.car.price}</Para>
			<Para>Call For Carfax</Para>
		</Wrapper>
	);
}

export default Card;
