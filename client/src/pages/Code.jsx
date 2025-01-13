import React from "react";
import ProjectThumbnail from "../components/ProjectThumbnail";
import { Grid } from "@material-ui/core";
import project_links from "../configs/project_links.js";
import styled from "styled-components";

const Code = () => {
	return (
		<>
			<Title>Coding Projects </Title>
			<ThumbnailContainer>
				<Grid container spacing={6} columns={{ xs: 12, sm: 3 }}>
					{project_links &&
						project_links
							.sort(function (a, b) {
								return new Date(b.date) - new Date(a.date);
							})
							.map((project) => {
								return (
									<Grid
										key={project.id}
										item
										xs={12}
										sm={6}
										md={4}
										lg={4}
										xl={3}
									>
										<ProjectThumbnail
											title={project.title}
											image={project.image}
											date={project.date}
											url={project.link}
											tech={project.tech}
											link={project.link}
											git={project.git}
										/>
									</Grid>
								);
							})}
				</Grid>
			</ThumbnailContainer>
		</>
	);
};

export default Code;

const Title = styled.h2`
	color: var(--dim-yellow);
	text-align: center;
	margin: 2rem;
`;

const ThumbnailContainer = styled.div`
	padding: 4rem;
	margin-left: 100px;
`;
