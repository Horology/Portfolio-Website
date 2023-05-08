import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "./svgs/downward.svg";

const Arrow = () => {
	return (
		<Section>
			<ArrowContainer>
				<ArrowIcon />
			</ArrowContainer>
		</Section>
	);
};

export { Arrow };

const ArrowContainer = styled.div`
	position: absolute;
	top: -5%;
	left: 50%;
	transform: translateX(-50%);
	background-color: var(--bluish-black);

	svg {
		stroke: var(--secondary-color3);
	}
`;

const Section = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	width: 100%;
`;
