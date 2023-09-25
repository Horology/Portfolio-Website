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
