import React from "react";
import styled from "styled-components";

const Art = () => {
	return (
		<Container>
			<Title>Digital Art</Title>
			<P>
				Link to
				<a href="https://www.instagram.com/inksults2inkjuries/" className="">
					Instagram
				</a>
			</P>
			<Main>Gallery is Under Construction</Main>
		</Container>
	);
};

export default Art;

const Container = styled.div``;

const Title = styled.h1`
	text-align: center;
`;

const P = styled.p``;

const Main = styled.div`
	display: flex;
	justify-content: left;
`;
