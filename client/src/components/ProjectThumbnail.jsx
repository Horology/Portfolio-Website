import React, { useState } from "react";
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

export default function ProjectThumbnail({
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
				{tech.map((t) => {
					return <div>{t}</div>;
				})}
			</Tech>
			<URL>
				<a href={git}>
					<AiFillGithub size={30} />
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
						<BsFillDoorOpenFill size={30} />
					) : (
						<BsFillDoorClosedFill size={30} />
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
	text-align: center;
	padding-top: 2rem;
	align-items: center;
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
		color: var(--white);
	}

	div {
		font-size: 11px;
		color: var(--teal);
	}
	cursor: pointer;
	border: 1px solid var(--white);
	align-self: center;
`;

const Tech = styled.div`
	display: flex;

	justify-content: center;
	margin-bottom: 0.5rem;
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
`;

const Image = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 5rem;

	&:hover {
		opacity: 0.8;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
