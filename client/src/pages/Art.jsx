import React from "react";
import styled from "styled-components";

const Art = () => {
	return (
		<Container>
			<Title>Digital Art</Title>
			<P>
				If you want to see my artwork, please click on the link below to head
				over to my instagram page. Thanks!
			</P>

			<Button href="https://www.instagram.com/inksults2inkjuries/">
				Instagram
			</Button>
		</Container>
	);
};

export default Art;

const Container = styled.div`
	height: calc(100vh - 10rem);
	display: flex;
	text-align: left;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 2;
	gap: 130px;
`;

const Title = styled.h1`
	text-align: center;
	color: white;
`;

const P = styled.p``;

const Button = styled.a`
	@keyframes bounce {
		0% {
			transform: scale(1, 1) translate(0px, 0px);
		}

		30% {
			transform: scale(1, 0.8) translate(0px, 10px);
		}

		75% {
			transform: scale(1, 1.1) translate(0px, -25px);
		}

		100% {
			transform: scale(1, 1) translate(0px, 0px);
		}
	}

	text-align: center;
	margin: auto;
	width: 150px;
	padding: 20px;
	background: cyan;
	animation: bounce 0.75s infinite;
`;
