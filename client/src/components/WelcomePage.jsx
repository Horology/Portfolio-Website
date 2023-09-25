import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { GrCaretDown } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";

const WelcomePage = () => {
	const [displayedText, setDisplayedText] = useState("");
	const [position, setPosition] = useState(0);

	const text =
		"Welcome Aboard Agent. We have gathered intelligence on [Hou Chong Chan]. Scroll down to review his portfolio.";
	const textRef = useRef(text);
	const positionRef = useRef(position);
	positionRef.current = position;

	useEffect(() => {
		const interval = setInterval(() => {
			setDisplayedText(textRef.current.substring(0, positionRef.current));
			setPosition((prev) => prev + 1);
			if (positionRef.current > textRef.current.length) {
				clearInterval(interval);
			}
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<Text>{displayedText}</Text>
			{textRef.current.length < positionRef.current && (
				<Button>
					<HashLink smooth to="/#about">
						<GrCaretDown strokecolor={"white"} />
					</HashLink>
				</Button>
			)}
		</Container>
	);
};

export default WelcomePage;

const Container = styled.div`
	padding-top: 200px;
	position: relative;
	top: 0;
	height: 100vh;
	width: 100vw;
	background: var(--bluish-black);
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	position: relative;
	overflow: visible;

	&::before {
		content: " ";
		background: radial-gradient(
			circle,
			rgba(0, 31, 84, 1) 0%,
			rgba(0, 8, 20, 1) 48%,
			rgba(0, 0, 0, 1) 100%
		);
		transform: translateY(-50%);
		height: 150vh;
		width: 100vw;
		filter: blur(10px);
		position: absolute;
	}
`;

const Text = styled.div`
	z-index: 1;
	position: relative;
	text-align: center;
	padding: 5rem;
	color: var(--white);
	pointer-events: none;
	font-size: 24px;
	width: 100%;
`;

const Button = styled.div`
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
