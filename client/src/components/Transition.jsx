import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "./svgs/downward.svg";

const Arrow = () => {
	return (
		<ArrowContainer>
			<ArrowIcon />
		</ArrowContainer>
	);
};

export { Arrow };

const ArrowContainer = styled.div`
	background-color: transparent;
	bottom: 0%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%);

	svg {
		stroke: var(--secondary-color3);
	}
`;
