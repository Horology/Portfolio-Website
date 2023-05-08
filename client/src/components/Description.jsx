import React from "react";
import { data } from "./svgs/SVGIcons";
import styled from "styled-components";

const Description = ({ id }) => {
	return (
		<Container>
			<p>{data[id - 1].description}</p>
			<p>{data[id - 1].notes} </p>
		</Container>
	);
};

export default Description;

const Container = styled.div`
	margin-top: 3rem;
	pointer-events: none;
	opacity: 0.9;

	border: 3px solid rgba(252, 252, 252, 0.7);
	padding: 2rem;
	width: 40%;
	height: 50%;
	border-radius: 3rem;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		padding-right: 0.25rem;
		padding-left: 0.25rem;
		h1 {
			font-size: 200%;
		}
		padding-top: 1rem;
		margin: 0;
		font-size: 75%;
	}
	p {
		margin: auto;
		justify-content: space-evenly;
		color: white;
	}
	svg {
		width: 5rem;
		height: 5rem;
	}
`;
