import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pageLinks from "../configs/links.js";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import timeline from "../configs/timeline.js";
import { FaDotCircle } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

const Navbar = (props) => {
	const { onShowModal } = props;
	const [selectedTime, setSelectedTime] = useState(-1);

	const hash = useLocation();

	useEffect(() => {
		if (hash.url === "/") {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}, [hash.url]);

	const handleClick = (e) => {
		e.preventDefault();
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<Container>
			<Row>
				<Columns>
					<Button onClick={handleClick}>
						<Link to="/">{pageLinks[0].text}</Link>
					</Button>
					<Button>
						<HashLink smooth to="/#about">
							{pageLinks[1].text}
						</HashLink>
					</Button>
					<Button>
						<HashLink smooth to="/#projects">
							{pageLinks[2].text}
						</HashLink>
					</Button>
					{pageLinks.slice(3).map((link, i) => {
						return (
							<Button key={i} onClick={() => onShowModal(true)}>
								{link.text}
							</Button>
						);
					})}
					{/* <Timeline onMouseLeave={() => setSelectedTime(-1)}>
						{timeline.map((event, i) => (
							<Segment key={i}>
								<Location onClick={() => setSelectedTime(i)}>
									<Circle size={20} color={"var(--white)"} />
									<Details selected={i === selectedTime}> {event.text}</Details>
								</Location>
								<Length />
							</Segment>
						))}
						<AiOutlineArrowDown
							size={35}
							color={"var(--white)"}
							opacity={0.5}
						/>
					</Timeline> */}
				</Columns>
			</Row>
		</Container>
	);
};

export default Navbar;

const Circle = styled(FaDotCircle)`
	opacity: 0.5;
	&:hover {
		transform: translateX(10px);
		transition: transform 1s;
		opacity: 1;
	}
`;

const Details = styled.div`
	position: absolute;
	top: 50%;
	left: 100%;
	width: ${(props) => (props.selected ? 220 : 0)}px;
	opacity: ${(props) => (props.selected ? 1 : 0)};
	height: ${(props) => (props.selected ? "fit-content" : "10px")};
	transform: translate(0%, -50%);
	transition: width 0.5s, opacity 1s, height 0.5s;
	pointer-events: none;
	background: rgba(126, 137, 173, 0.5);
	padding: 0.2rem;
	border-radius: 0.2rem;
	max-height: 300px;
`;

const Location = styled.div`
	position: relative;
	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Segment = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 0.4rem;
`;

const Container = styled.div`
	pointer-events: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: start;

	z-index: 5;
	h2 {
		color: rgb(8, 47, 131);
	}
	border-bottom: 0.5 solid white;
	@media screen and (max-width: 960px) {
	}
	width: 100vw;
	height: 100vh;
	user-select: none;
`;

const Columns = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 100px;
	align-self: end;
	background-color: var(--black-blue);
	opacity: 0.7;
	color: white;
	height: 100%;
`;

const Button = styled.button`
	display: block;
	margin: 2em 0rem;
	padding: 0.5rem 0.5rem;
	white-space: nowrap;
	font-size: 24px;
	user-select: none;
	opacity: 0.5;

	transition: width 0.5s, height 0.5s, background-color 1s, border 0.25s;
	color: var(--white);
	transform: rotate(-90deg);
	pointer-events: auto;

	a {
		color: var(--white);
	}

	svg {
		display: block;
		text-align: center;
	}

	&:hover {
		color: white;
		border: 3px solid rgba(255, 255, 255, 0.5);
		border-radius: 0.1rem;
		transition: opacity 0.5s, padding 0.5s;
		padding: 0.5rem 1rem;
		opacity: 1;
	}
`;

const Timeline = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	pointer-events: auto;
`;

const Length = styled.div`
	margin: 0;
	height: 50px;
	width: 0.2rem;
	border-color: white;
	border-width: 0;
	border-style: dashed;
	opacity: 0.5;
	border-left-width: 0.2rem;
	pointer-events: none;
`;
