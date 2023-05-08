import React from "react";
// import AboutMeButton from "../components/AboutMeButton";
// import aboutme_descriptions from "../constants/aboutme_descriptions";
import Status from "../components/Status";
import socialLinks from "../constants/social_links";
import styled from "styled-components";

const About = () => {
	return (
		<Container id="about">
			<Introduction>
				<Table>
					<Row>
						<Label>Name</Label>
						<Description>Hou Chong Chan</Description>
					</Row>

					<Row>
						<Label>Occupation</Label>
						<Description>
							<SpanText> Software Developer </SpanText>
						</Description>
					</Row>
					<Row>
						<Label>Contacts</Label>
						<SocialLinks>
							{socialLinks.map((link) => {
								return (
									<a href={link.url} key={link.id} className="links">
										<i>{link.icon2}</i>
									</a>
								);
							})}
						</SocialLinks>
					</Row>
					<Status />
				</Table>
			</Introduction>
			{/* <AboutContainer>
				{aboutme_descriptions.map((data) => {
					return <AboutMeButton text={data.description} />;
				})}
			</AboutContainer> */}
		</Container>
	);
};

export default About;

const SpanText = styled.div`
	color: var(--highlighted-text);
	display: inline-block;
	padding: 0.25rem 0.5rem;
	margin-bottom: 2rem;

	&:hover {
		background-color: var(--highlighted-background);
		color: var(--highlighted-text-hover);
		border-radius: 0.5rem;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.2em;
`;
const Label = styled.div`
	border: 0.1em solid var(--dim-yellow);
	color: var(--dim-yellow);
	padding: 0.2em;
`;

const Description = styled.div`
	color: var(--white);
	opacity: 0.7;
`;

const Table = styled.div`
	width: 75%;
`;

const Container = styled.div``;
const Introduction = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const SocialLinks = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	.links {
		svg {
			--trans: all 0.3s;
			margin: 0.5rem;
			width: 2rem;
			height: 100%;
			color: var(--primary-text-color2);
			-webkit-transition: var(--trans);
			transition: var(--trans);
			position: relative;
			overflow: hidden;
			z-index: 1;
			&:hover {
				color: var(--secondary-color);
				&:before {
					width: 100%;
				}
			}
		}
	}
`;

// const AboutContainer = styled.div``;
