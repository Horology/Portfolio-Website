import React from "react";
import { Link } from "react-router-dom";
import pageLinks from "../configs/links.js";
import { default as photo } from "../components/img/codingPhoto.jpg";
import { default as photo2 } from "../components/img/link_aegislash2.png";
import styled from "styled-components";

const Projects = () => {
	return (
		<Container>
			<Title id="projects">Current Projects</Title>
			<Row>
				<Link to="/code/" className="project">
					<Thumbnail>
						<Image src={photo} alt="Hou's Coding Projects" />
						<Text className="projTitle">{pageLinks[2].projectType.code}</Text>
					</Thumbnail>
				</Link>
				<Link to="/art/">
					<Thumbnail>
						<Image src={photo2} alt="Hou's Art Projects" />
						<Text className="projTitle">{pageLinks[2].projectType.art}</Text>
					</Thumbnail>
				</Link>
			</Row>
		</Container>
	);
};

export default Projects;

const Container = styled.div`
	padding: 50px;
	padding-top: 0px;
	padding-bottom: 3rem;
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Thumbnail = styled.div`
	position: relative;
	height: 500px;
	aspect-ratio: 1;
	cursor: pointer;
	transition: opacity 2s, height 2s, background-color 2s, transform 0.5s;

	div {
		visibility: collapse;
	}

	img {
		opacity: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: translateY(-10px);
		border: 1px solid white;
		div {
			visibility: visible;
			transition: visibility 0.5s;
		}

		img {
			opacity: 0.2;
			transition: opacity 0.5s;
		}
	}
`;

const Title = styled.h1`
	color: var(--dim-yellow);
	text-decoration: underline;
	opacity: 0.8;
	margin-bottom: 3rem;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	padding-bottom: 3rem;
`;

const Image = styled.img`
	border-radius: 1rem;

	height: auto;
	max-width: 100%;
`;

const Text = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
	font-size: 50px;
	color: var(--dim-yellow);
	opacity: 0.7;
`;
