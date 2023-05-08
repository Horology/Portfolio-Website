import styled from "styled-components";

const AboutMeButton = ({ text }) => {
	const firstchar = text.slice(0, 1).toUpperCase();

	const handleEnter = (e) => {
		e.preventDefault();
	};
	const handleLeave = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
				<Span>{firstchar}</Span>
			</Button>
		</Container>
	);
};

export default AboutMeButton;

const Container = styled.div`
	display: flex;
`;

const Button = styled.div`
	--trans: all 0.35s;
	display: block;
	padding: 1rem;
	margin-right: 0.25rem;
	color: var(--blue-text-background-hover);
	font-family: ff-secondary;
	font-weight: bold;
	font-size: 1.5rem;
	border: 2px solid var(--blue-text-background-hover);
	text-align: center;
	position: relative;
	-webkit-transition: var(--trans);
	transition: var(--trans);

	&:after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: var(--blue-text-background-hover);
		-webkit-transition: var(--trans);
		transition: var(--trans);

		&:hover {
			width: 100%;
		}
	}

	&:hover {
		color: #fff;
		transform: rotate(0.0625turn);
	}
`;

const Span = styled.div`
	position: relative;
	z-index: 2;
	align-self: end;
	margin-left: 0.25rem;
	color: var(--background-color2);
`;
