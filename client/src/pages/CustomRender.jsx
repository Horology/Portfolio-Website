import { Arrow } from "../components/Transition";
import styled from "styled-components";
import { ReactComponent as HouIcon } from "../components/img/hou.svg";

const CustomRender = ({ percentage, width, number, multiplier, opacity }) => {
	if (number < 0)
		return (
			<Wrapper>
				{percentage > 0.7 && <Hou />}
				{percentage > 0.8 && (
					<Position top={35}>
						Born in 1996 in Macau and immigrated to the US at the age of 6.
					</Position>
				)}
				{percentage > 0.9 && (
					<Position top={30}>
						Started Mechanical engineering at Cooper Union. Worked on robotics
						and programming.
					</Position>
				)}
				{percentage > 1 && (
					<Position top={20}>
						Graduated and started work as a Mechanical Engineer. Worked on Web
						applications on the side as a hobby.
					</Position>
				)}
				{percentage > 1.2 && (
					<Position top={10}>
						Working oin all fronts at Adra.ai, including Cloud infrastructure,
						databases, AGILE, CI/CD, React Front End and Django Back End.
					</Position>
				)}
				{percentage > 1.3 && <Arrow />}
			</Wrapper>
		);
	const customPercentage = percentage * 1.1;
	const maxHeight = percentage * 100 + multiplier * 100;

	return (
		<Border
			percentage={percentage}
			customColor={
				percentage > 0.8 ? "transparent" : `rgba(0,18,50, ${opacity})`
			}
			customPercentage={customPercentage}
			width={width}
			multiplier={multiplier}
			maxHeight={maxHeight}
			number={number}
		>
			<Border2
				percentage={percentage}
				customColor={
					percentage > 0.8 ? "transparent" : `rgba(5,15,23, ${opacity})`
				}
				customPercentage={customPercentage}
				width={width}
				multiplier={multiplier}
				maxHeight={maxHeight}
			>
				{number === 0 ? (
					<CustomRender
						percentage={percentage}
						width={width}
						number={number - 1}
						multiplier={multiplier * 0.93}
						opacity={opacity - 0.15}
					/>
				) : (
					<Border3
						percentage={percentage}
						customColor={
							percentage > 0.8 ? "transparent" : `rgba(120,120,120, ${opacity})`
						}
						customPercentage={customPercentage}
						width={width}
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
`;

const Wrapper = styled.div`
	opacity: 0.5;
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
	// opacity: 0;
	// transition: opacity ease 1s;
	// opacity: 1;
`;

const Border = styled.div.attrs(
	({
		percentage,
		customColor,
		customPercentage,
		width,
		multiplier,
		maxHeight,
	}) => ({
		style: {
			background: customColor,
			width: customPercentage * 500 + width * multiplier,
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

	${({ number }) => number === 3 && `animation: pulse 2s infinite;`}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
		}
		70% {
			box-shadow: 0 -20px 0 20px rgba(255, 255, 255, 0);
		}
		100% {
			box-shadow: 0 -10px 0 10px rgba(255, 255, 255, 0);
		}
	}
`;

const Border2 = styled.div.attrs(
	({
		percentage,
		customColor,
		customPercentage,
		width,
		multiplier,
		maxHeight,
	}) => ({
		style: {
			background: customColor,
			width: customPercentage * 450 + width * multiplier * 0.98,
			height:
				maxHeight > 200 ? "200vh" : percentage * 115 + multiplier * 97 + "vh",
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
	({
		percentage,
		customColor,
		customPercentage,
		width,
		multiplier,
		maxHeight,
	}) => ({
		style: {
			background: customColor,
			width: customPercentage * 440 + width * multiplier * 0.96,
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
