import React, { useState } from "react";
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

export default function ProjectButton({ id, title, git, link, date, tech }) {
	const [show, setShow] = useState(false);
	const [hovered, setHovered] = useState(false);

	return (
		<Container
			id={id}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<h3> {title}</h3>
			<div> {date}</div>
			<Tech hovered={hovered}>
				{tech.map((t) => {
					return <div key={t}>{t}</div>;
				})}
			</Tech>
			<URL hovered={hovered}>
				<a href={git}>
					<AiFillGithub size={20} />
				</a>
				<a
					href={link}
					onMouseEnter={() => {
						setShow(true);
					}}
					onMouseLeave={() => {
						setShow(false);
					}}
				>
					{show && show ? (
						<BsFillDoorOpenFill size={20} />
					) : (
						<BsFillDoorClosedFill size={20} />
					)}
				</a>
			</URL>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	cursor: pointer;
	transition: opacity 2s, height 2s, background-color 2s, transform 0.5s;
	color: white;
	background: transparent;
	border: 1px solid white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 4px;

	* {
		z-index: 1000;
	}

	div {
		font-size: 12px;
	}

	&:hover {
		box-shadow: 0 0 10px darkgrey;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border: 1px solid transparent;
		h3 {
			font-size: 1.44em;
		}
		z-index: 999;
		background: #f35f32;
		background: var(--highlighted-background);
		text-shadow: 0 0 10px #842508;
	}
`;

const Tech = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 0.5rem;
	font-size: 14px;
	gap: 2px;
	width: 95%;
	div {
		background: var(--teal);
		color: white;
		padding: 0 0.2rem;
		border-radius: 0.5rem;
	}
	overflow: ${({ hovered }) => (hovered ? "visible" : "hidden")};
`;

const URL = styled.div`
	width: 100%;
	padding: 6px;
	${({ hovered }) => hovered && iconAnimations};
`;

const iconAnimations = `	
	a:first-child {
		svg {
			animation: bounce2 0.75s infinite;
		}
	}

	a:nth-child(2) {
		svg {
			animation: bounce2 0.75s 0.35s infinite;
		}
	}
`;
