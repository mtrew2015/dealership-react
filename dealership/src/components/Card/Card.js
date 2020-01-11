import React from 'react';
import picture from '../../comingSoon.jpg';
import styled from 'styled-components';

const Wrapper = styled.div` 
display: flex; 
width: 26%;
flex-direction: column;
background-color: white;
align-items: center;
height: 100%;
margin: 2%
padding: 10px;
`;
const Image = styled.img`
	width: 100%;
	height: 200px;
	margin: 20px;
`;

const Used = styled.span`
	font-size: 1.4rem;
	font-weight: bolder;
	color: gray;
	margin-right: 5px;
`;

const Para = styled.p`
	font-size: 1.2rem;
	color: black;
`;

const Quote = styled.button`
	width: 90%;
	background-color: crimson;
	color: white;
	height: 50px;
	display: flex;
	justify-content: center;
	font-size: 1.4rem;
	margin-top: 5px;
`;

function Card(props) {
	return (
		<Wrapper>
			<Para>
				<Used>Used</Used>
				{props.car.year} {props.car.make} {props.car.model}
			</Para>
			<Image src={picture} />
			<Para>Miles: {props.car.miles}</Para>
			<Para>Price ${props.car.price}</Para>
			<Quote>Get Your VIP Pricing</Quote>
		</Wrapper>
	);
}

export default Card;
