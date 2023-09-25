import socialLinks from "../configs/social_links";
import styled from "styled-components";

const Footer = () => {
	return (
		<Container>
			<SocialLinks>
				{socialLinks.map((link, i) => {
					return (
						<SVG href={link.url} key={i}>
							{link.icon}
						</SVG>
					);
				})}
			</SocialLinks>
			<div>©{new Date().getFullYear()}, Hou Chong Chan</div>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--primary-text-color);
	color: white;
	width: 100%;
	height: 10rem;
	gap: 0.2rem;
`;

const SocialLinks = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
`;

const SVG = styled.a`
	--trans: all 0.3s;
	margin: 0.5rem;
	width: 2rem;
	height: 100%;
	color: var(--primary-text-color2);
	-webkit-transition: var(--trans);
	transition: var(--trans);
	z-index: 1;

	&:hover {
		color: var(--secondary-color);
	}
`;
