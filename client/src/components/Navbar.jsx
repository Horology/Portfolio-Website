import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pageLinks from "../configs/links.js";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Navbar = (props) => {
	const { onShowModal } = props;
	const [index, setIndex] = useState(0);
	const [navTabs, setNavTabs] = useState([]);

	useEffect(() => {
		if (index < pageLinks.length) {
			setNavTabs((prev) => [...prev, pageLinks[index]]);

			setTimeout(() => {
				setIndex((prev) => prev + 1);
			}, 200);
		} else if (index === pageLinks.length) {
			setTimeout(() => {
				setIndex((prev) => prev + 1);
			}, 200);
		}
	}, [index]);

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
					{navTabs.map((e, i) => {
						if (e.buttonType === 1) {
							return (
								<Button
									onLoad={() => console.log("loaded")}
									key={i}
									onClick={handleClick}
									transition={index > i}
								>
									<Link to="/">{e.text}</Link>
								</Button>
							);
						} else if (e.buttonType === 2) {
							return (
								<Button key={i} transition={index > i}>
									<HashLink smooth to={e?.url}>
										{e.text}
									</HashLink>
								</Button>
							);
						} else {
							return (
								<Button
									key={i}
									onClick={() => onShowModal(true)}
									transition={index > i}
								>
									{e.text}
								</Button>
							);
						}
					})}
				</Columns>
			</Row>
		</Container>
	);
};

export default Navbar;

const slideIn = ` 			
	transform: translateY(0) rotate(-90deg) !important;
	opacity: 1 !important;
	border: 3px solid rgb(255, 255, 255, 0);
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
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
	gap: 1.5rem;
	height: 100vh;
	width: 6.5rem;
`;

const Button = styled.button`
	margin: 2em 0rem 1rem 0rem;
	padding: 0.5rem;
	font-size: 24px;
	user-select: none;
	opacity: 0.5;
	transition: transform 1s 0.5s, opacity 1.5s 0.5s, border 1.5s 0.5s;
	border: 3px solid rgb(255, 255, 255, 1);
	white-space: nowrap;
	transform: translateY(5000%) rotate(-90deg);
	color: var(--white);
	pointer-events: auto;
	width: 150px;

	a {
		color: var(--white);
	}

	svg {
		display: block;
		text-align: center;
	}

	&:hover {
		color: white;
		border: 3px solid rgba(255, 255, 255, 1);
		border-radius: 0.1rem;
		transition: opacity 0.5s, padding 0.5s;
		opacity: 1;
	}

	${(props) => props.transition === true && slideIn}
`;
