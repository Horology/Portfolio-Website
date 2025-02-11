import React from "react";
import styled from "styled-components";
import project_links from "../configs/project_links";
import ProjectButton from "./ProjectButton";

const Portfolio = () => {
	return (
		<Container>
			<Title id="projects">Current Projects</Title>
			<Main>
				{project_links &&
					project_links
						.sort(function (a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map((project) => {
							return (
								<ProjectButton
									title={project.title}
									image={project.image}
									date={project.date}
									url={project.link}
									tech={project.tech}
									link={project.link}
									git={project.git}
								/>
							);
						})}
			</Main>
		</Container>
	);
};

export default Portfolio;

const Container = styled.div`
	padding: 50px;
	padding-top: 0px;
	padding-bottom: 3rem;
	width: 90vw;
	height: 50%;
	display: flex;
	margin: auto;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

const Main = styled.div`
	display: grid;
	height: 100%;
	width: 100%;
	padding: auto;
	margin: 0;
	grid-gap: 5px;
	grid-template-rows: 70px;
	grid-template-columns: repeat(18, 1fr);

	@media (min-width: 767px) {
		grid-gap: 18px;
		grid-template-rows: 70px;
		grid-template-columns: repeat(18, 1fr);
	}

	div:nth-child(1) {
		grid-area: 2 / 4 / span 1 / span 3;
	}
	div:nth-child(2) {
		grid-area: 2 / 7 / span 1 / span 7;
	}
	div:nth-child(3) {
		grid-area: 1 / 7 / span 1 / span 9;
	}
	div:nth-child(4) {
		grid-area: 3 / 3 / span 2 / span 5;
	}
	div:nth-child(5) {
		grid-area: 2 / 15 / span 2 / span 4;
	}
	div:nth-child(6) {
		grid-area: 6 / 2 / span 3 / span 4;
	}
	div:nth-child(7) {
		grid-area: 3 / 8 / span 1 / span 7;
	}
	div:nth-child(8) {
		grid-area: 4 / 13 / span 3 / span 6;
	}
	div:nth-child(9) {
		grid-area: 5 / 6 / span 2 / span 5;
	}
	div:nth-child(10) {
		grid-area: 7 / 8 / span 2 / span 13;
	}
	// div:nth-child(11) {
	// 	grid-area: 14 / 4 / span 2 / span 2;
	// }
	// div:nth-child(12) {
	// 	grid-area: 14 / 6 / span 3 / span 3;
	// }
`;

const Title = styled.h2`
	color: var(--dim-yellow);
	margin-bottom: 40px;
`;
