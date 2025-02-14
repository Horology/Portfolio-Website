import React from "react";
import styled from "styled-components";
import project_links from "../configs/project_links";
import ProjectButton from "./ProjectButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Art from "./Art";

const Portfolio = () => {
	const ref = useRef();
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to("#project-0", { x: -200, y: -100, duration: 0.3 })
			.to("#project-1", { x: -760, y: -50, duration: 0.3 })
			.to("#project-2", { x: -760, y: 0, duration: 0.5 })
			.to("#project-3", { x: 760, y: 0, duration: 0.3 })
			.to("#project-4", { x: -760, y: 0, duration: 0.3 })
			.to("#project-5", { x: 760, y: 0, duration: 0.5 })
			.to("#project-6", { x: 760, y: 0, duration: 0.4 })
			.to("#project-7", { x: 760, y: 0, duration: 0.3 })
			.to("#project-8", { x: 760, y: 300, duration: 0.3 })
			.to("#project-9", { x: 760, y: 100, duration: 0.5 });
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				tl.current.reverse();
			} else {
				tl.current.play();
			}
		});

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<Container ref={ref}>
			<Title id="projects">Current Projects</Title>
			<Main>
				{project_links &&
					project_links
						.sort(function (a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map((project, i) => {
							return (
								<ProjectButton
									key={i}
									id={`project-${i}`}
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
			<Art />
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
	grid-auto-rows: 70px !important;
	grid-template-columns: repeat(18, 1fr);

	@media (min-width: 767px) {
		grid-gap: 18px;
		grid-auto-rows: 70px !important;
		grid-template-columns: repeat(18, 1fr);
	}

	div:nth-child(1) {
		grid-area: 2 / 3 / span 2 / span 4;
	}
	div:nth-child(2) {
		grid-area: 5 / 16 / span 2 / span 7;
	}
	div:nth-child(3) {
		grid-area: 1 / 7 / span 2 / span 9;
	}
	div:nth-child(4) {
		grid-area: 4 / 2 / span 3 / span 6;
	}
	div:nth-child(5) {
		grid-area: 2 / 16 / span 3 / span 5;
	}
	div:nth-child(6) {
		grid-area: 9 / 2 / span 4 / span 5;
	}
	div:nth-child(7) {
		grid-area: 3 / 9 / span 4 / span 7;
	}
	div:nth-child(8) {
		grid-area: 7 / 13 / span 3 / span 6;
	}
	div:nth-child(9) {
		grid-area: 7 / 5 / span 2 / span 6;
	}
	div:nth-child(10) {
		grid-area: 10 / 8 / span 2 / span 13;
	}
`;

const Title = styled.h2`
	color: var(--dim-yellow);
	margin-bottom: 40px;
`;
