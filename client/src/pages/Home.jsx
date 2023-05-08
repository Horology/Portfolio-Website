import React from "react";
import About from "./About";
import Tech from "../components/Tech";
import Projects from "./Projects";
import { Arrow } from "../components/Transition";
import ContactModal from "../components/ContactModal";
import WelcomePage from "../components/WelcomePage";
import styled from "styled-components";

const Home = ({ showModal, onCloseModal }) => {
	return (
		<Container>
			{showModal && <ContactModal onCloseModal={onCloseModal} />}
			<WelcomePage />
			{!showModal && (
				<>
					<Arrow />
					<About />
					<Tech />
					<Arrow />
					<Projects />
				</>
			)}
		</Container>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`;
