import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Art: FC<PropsWithChildren> = () => {
	return (
		<Container>
			<P>
				If you want to see some artwork, please click on the link below to head
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
	margin-top: 20px;
	display: flex;
	text-align: left;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 2;
	gap: 20px;
`;

const P = styled.p``;

const Button = styled.a`
	text-align: center;
	margin: auto;
	width: 150px;
	padding: 20px;
	background: cyan;
	animation: bounce 0.75s infinite;
`;
