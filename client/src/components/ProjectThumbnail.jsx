import React, { useState } from "react";
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

export default function ProjectThumbnail({
	id,
	title,
	git,
	image,
	link,
	date,
	tech,
}) {
	const [show, setShow] = useState(false);

	return (
		<Article>
			<Image>
				<Img src={image} alt="thumbnail-img" />
			</Image>
			<h3> {title}</h3>
			<div> {date}</div>
			<Tech>
				{tech &&
					tech.map((t) => {
						return <div>{t}</div>;
					})}
			</Tech>
			<URL>
				<a href={git}>
					<AiFillGithub size={45} />
				</a>
				{/* <Link to={`/code/${id}`}>Learn More</Link> */}
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
						<BsFillDoorOpenFill size={45} />
					) : (
						<BsFillDoorClosedFill size={45} />
					)}
				</a>
			</URL>
		</Article>
	);
}

const Article = styled.article`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	border-radius: 1rem;
	transition: transform 0.3s, -webkit-transform 0.3s;
	width: 80%;
	height: 100%;
	overflow: hidden;
	&:hover {
		transform: scale(1.025);
		opacity: 0.8;
		border-color: var(--dim-yellow);
	}

	* {
		color: white;
	}
	cursor: pointer;
	border: 1px solid var(--white);
	align-self: center;
`;

const Tech = styled.div`
	display: flex;

	justify-content: space-between;
	margin-bottom: 0.5rem;
	width: 75%;

	overflow: hidden;
`;

const URL = styled.div`
	width: 100%;
`;

const Image = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 10rem;

	&:hover {
		opacity: 0.8;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
`;
