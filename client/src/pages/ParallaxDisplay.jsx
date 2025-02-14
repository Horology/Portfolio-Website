import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import CustomRender from "./CustomRender";

const ParallaxDisplay = () => {
	const [width, setWidth] = useState(0);

	const ref = useRef();

	useEffect(() => {
		//https://stackoverflow.com/questions/68175873/detect-element-reference-height-change
		if (!ref.current) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			if (ref.current) {
				setWidth(ref.current.offsetWidth * 0.9);
			}
		});
		resizeObserver.observe(ref.current);

		return () => {
			resizeObserver.disconnect();
			setWidth(0);
		};
	}, []);

	return (
		<Container ref={ref}>
			<Parallax
				style={{
					overflow: "visible",
				}}
				renderLayer={(percentage) => (
					<CustomRender
						percentage={percentage}
						width={width}
						number={3}
						multiplier={1}
						opacity={1}
					/>
				)}
			>
				<div style={{ height: "80vh" }}></div>
			</Parallax>
		</Container>
	);
};

export default ParallaxDisplay;

const Container = styled.div`
	height: 150vh;
	width: 100%;
`;

// `"@material-ui/core": "^4.12.3",
// "@mui/icons-material": "^5.1.0",
// "@testing-library/react": "^11.2.7",
// "@testing-library/user-event": "^12.8.3",
// "axios": "^0.24.0",
// "gsap": "^3.12.7",
// "moment": "^2.29.1",
// "react": "^17.0.2",
// "react-dom": "^17.0.2",
// "react-file-base64": "^1.0.3",
// "react-icons": "^4.3.1",
// "react-parallax": "^3.5.1",
// "react-redux": "^7.2.6",
// "react-router": "^6.0.2",
// "react-router-dom": "^6.0.2",
// "react-router-hash-link": "^2.4.3",
// "react-scripts": "^4.0.3",
// "react-scroll": "^1.8.5",
// "styled-components": "^5.3.10"`
