import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Code from "./pages/Code";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";

const Main = () => {
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
