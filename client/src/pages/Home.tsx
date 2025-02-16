import React, { FC, PropsWithChildren } from "react";
import About from "./About.tsx";
import Tech from "../components/Tech.tsx";
import ParallaxDisplay from "./ParallaxDisplay.tsx";
import ContactModal from "../components/ContactModal.tsx";
import WelcomePage from "../components/WelcomePage.tsx";
import styled from "styled-components";
import Portfolio from "./Portfolio.tsx";

interface Props {
	showModal: boolean;
	onCloseModal: () => void;
}

const Home: FC<PropsWithChildren<Props>> = ({ showModal, onCloseModal }) => {
	return (
		<Container>
			<ContactModal active={showModal} onCloseModal={onCloseModal} />
			<WelcomePage />
			{!showModal && (
				<>
					<ParallaxDisplay />
					<About />
					<Tech />
					<Portfolio />
				</>
			)}
		</Container>
	);
};

export default Home;

const Container = styled.div`
	parallaxdisplay: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`;
