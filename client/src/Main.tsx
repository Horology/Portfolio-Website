import React, { useState, FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Code from "./pages/Code.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";


const Main: FC<PropsWithChildren> = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<Container>
			<Navbar onShowModal={setShowModal} />
			<Routes>
				<Route
					path="/*"
					element={
						<Home
							showModal={showModal}
							onCloseModal={() => setShowModal(false)}
						/>
					}
				/>
				<Route path="/code/" element={<Code />} />
			</Routes>
			<Footer />
		</Container>
	);
};

export default Main;

const Container = styled.div`
	overflow-x: hidden;
`;
