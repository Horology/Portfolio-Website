import styled from "styled-components";
import { ReactComponent as HouIcon } from "../components/img/hou.svg";

const CustomRender = ({ percentage, width, number, multiplier, opacity }) => {
	if (number < 0)
		return (
			<Wrapper>
				<Hou active={percentage > 0.7} />
				<Position top={30} active={percentage > 0.9}>
					Bachelor's of Mechanical engineering at Cooper Union. Studied
					programming and robotics while working on the degree.
				</Position>
				<Position top={20} active={percentage > 1}>
					Started working Full Stack at Adravision with focusing on improving CI
					& CD pipelines, querying to databases through Python Django on the
					back end, implemented visual editor through React front end.
				</Position>
				<Position top={10} active={percentage > 1.2}>
					Worked on creating a Medium-like text editor, chatGPT assistant
					chatbot, p2p messaging platform, and admin portal for database
					insights in Blogbamba.
				</Position>
			</Wrapper>
		);
	const maxHeight = percentage * 100 + multiplier * 100;

	return (
		<Border
			percentage={percentage}
			customColor={percentage > 0.8 ? "transparent" : `rgba(0,18,50, .5)`}
			multiplier={multiplier}
			maxHeight={maxHeight}
			number={number}
		>
			<Border2
				percentage={percentage}
				customColor={percentage > 0.8 ? "transparent" : `rgba(0,18,50, .5)`}
				multiplier={multiplier}
				maxHeight={maxHeight}
			>
				{number === 0 ? (
					<CustomRender
						percentage={percentage}
						width={width}
						number={number - 1}
						multiplier={multiplier * 0.93}
						opacity={opacity - 0.251}
					/>
				) : (
					<Border3
						percentage={percentage}
						customColor={
							percentage > 0.8 ? "transparent" : `rgba(251,251,251, 1)`
						}
						multiplier={multiplier}
						maxHeight={maxHeight}
					>
						<CustomRender
							percentage={percentage}
							width={width}
							number={number - 1}
							multiplier={multiplier * 0.92}
							opacity={opacity - 0.15}
						/>
					</Border3>
				)}
			</Border2>
		</Border>
	);
};

export default CustomRender;

const Position = styled.div`
	background-color: transparent;
	bottom: ${({ top }) => top}%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
	color: white;
	width: 50vw;
	opacity: ${({ active }) => (active ? 0.7 : 0)};
	transition: opacity 2s linear;
`;

const Wrapper = styled.div`
	opacity: 1;
	z-index: 1;
	height: 100%;
	width: 100vw;
`;

const Hou = styled(HouIcon)`
	background-color: transparent;
	left: 50%;
	top: 40%;
	position: absolute;
	transform: translate(-50%, -50%);
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: opacity 2s linear;
`;

const Border = styled.div.attrs(
	({ percentage, customColor, multiplier, maxHeight }) => ({
		style: {
			border: `1px solid ${customColor}`,
			width: "100%",
			height:
				maxHeight > 200 ? "200vh" : percentage * 120 + multiplier * 100 + "vh",
		},
	})
)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: background 0.5s linear, filter 0.3s ease;
	box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
`;

const Border2 = styled.div.attrs(
	({ percentage, customColor, multiplier, maxHeight }) => ({
		style: {
			border: `1px solid ${customColor}`,
			width: "100%",
			height:
				maxHeight > 200 ? "200vh" : percentage * 120 + multiplier * 97 + "vh",
		},
	})
)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: background 1s linear, filter 0.3s ease;
`;

const Border3 = styled.div.attrs(
	({ percentage, customColor, multiplier, maxHeight }) => ({
		style: {
			border: `1px solid ${customColor}`,
			width: "120%",
			height:
				maxHeight > 200 ? "200vh" : percentage * 110 + multiplier * 95 + "vh",
		},
	})
)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: background 1s linear, filter 0.3s ease;
`;
