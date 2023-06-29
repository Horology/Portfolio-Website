import React from "react";
import { data } from "./svgs/SVGIcons";
import styled from "styled-components";

const Description = ({ id }) => {
	return (
		<Container>
			{id !== -1 && (
				<InnerContainer id={id - 1}>
					<Content id={id - 1}>{data[id - 1].description}</Content>
					<Content id={id - 1}>{data[id - 1].notes} </Content>
				</InnerContainer>
			)}
		</Container>
	);
};

export default Description;

const InnerContainer = styled.div`
	border: 3px solid rgba(252, 252, 252, 0.7);
	animation: 1s 1 normal show;
	animation-fill-mode: forwards;

	color: ${(props) => (props.id ? "var(--white)" : "transparent")};

	@keyframes show {
		from {
			width: 0px;
			height: 0px;
			padding: 0;
			color: transparent;
		}
		50% {
			width: 1%;
			height: 70%;
			color: transparent;
		}
		to {
			width: 60%;
			height: 200px;
			padding: 2rem;
			color: white;
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	pointer-events: none;
	opacity: 0.9;
	position: relative;
	top: 0;

	width: 100%;
	height: 400px;
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
