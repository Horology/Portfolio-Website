import React, { FC, PropsWithChildren } from "react";
import { MdDraw } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import styled from "styled-components";

const paragraphs = [
	{
		title: "Experiences",
		description:
			"Programmed autonomous robots as an undergraduate. Currently working as a Fullstack Developer using Python, Bash, Docker, and Javascript",
		icon: <AiOutlineRead size={45} />,
	},
	{
		title: "Skills",
		description:
			"Skill in creating responsive SVG elements for users to manipulate. Experienced in MERN, Agile, Bash, Docker, Gitlab CI/CD and PostgreSQL",
		icon: <BiCodeAlt size={45} />,
	},
	{
		title: "Hobbies",
		description:
			"Learning to read and speak in Japanese and Korean. Loves to draw digitally and play electric guitar",
		icon: <MdDraw size={45} />,
	},
];

const Status: FC<PropsWithChildren> = () => {
	return (
		<Container>
			<Details>
				{paragraphs.map((para, i) => {
					return (
						<Card key={i}>
							<Row>
								<Title> {para.title}</Title>
							</Row>
							<p> {para.description}</p>
						</Card>
					);
				})}
			</Details>
		</Container>
	);
};

export default Status;

const Title = styled.h2`
	color: var(--dim-yellow);
	white-space: nowrap;
`;

const Container = styled.div`
	margin-top: 2rem;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 0.2rem;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (min-width: 1025px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	&:child {
		padding: 2rem;
	}
`;

const Card = styled.div`
	cursor: pointer;
	position: relative;
	margin: 0.5rem 1rem;
	background-color: var(--highlighted-background);
	min-height: 350px;
	opacity: 0.75;
	color: var(--primary-text-color2);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	width: 75%;
	height: 100%;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		min-height: 250px;
	}

	svg,
	p {
		color: var(--primary-text-color);
	}

	&:hover {
		border: 0.1rem solid var(--dim-yellow);
		transition: var(--transition);
		transform: scale(1.05);
		width: 80%;

		h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: 105%;
		}
	}
`;
