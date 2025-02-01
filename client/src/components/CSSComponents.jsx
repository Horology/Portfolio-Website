import styled from "styled-components";

export const Button = styled.div`
	display: flex;
	justify-content: center;
	width: 5rem;
	height: 5rem;
	cursor: pointer;
	z-index: 1;

	svg {
		width: 100%;
		height: 100%;
		fill: white;
		stroke: white;
		polygon {
			stroke: white;
			stroke-width: 1px;
			opacity: 0.8;
		}
	}
	position: absolute;

	animation-duration: 1s;
	animation-name: changeposition;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	@keyframes changeposition {
		from {
			top: 51%;
		}

		to {
			top: 50%;
		}
	}
`;
