import React, { useState } from "react";
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

export default function ProjectButton({ title, git, image, link, date, tech }) {
	const [show, setShow] = useState(false);

	return (
		<Container>
			<Image>
				<Img src={image} alt="thumbnail-img" />
			</Image>
			<h3> {title}</h3>
			<div> {date}</div>
			<Tech>
				{tech.map((t) => {
					return <div>{t}</div>;
				})}
			</Tech>
			<URL>
				<a href={git}>
					<AiFillGithub size={30} />
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
						<BsFillDoorOpenFill size={30} />
					) : (
						<BsFillDoorClosedFill size={30} />
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
		font-size: 14px;
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

		img {
			filter: none;
		}
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
	overflow: hidden;
`;

const URL = styled.div`
	width: 100%;
	padding: 6px;
`;

const Image = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;

	&:hover {
		opacity: 0.8;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	opacity: 1;
	filter: invert(100%);
`;
