import { useEffect, useRef, useState } from "react";
import { data } from "./svgs/SVGIcons";
import Description from "./Description";
import styled from "styled-components";

const Skills = () => {
	const carouselRef = useRef();
	const containerRef = useRef();
	const timerRef = useRef();
	const [items, setItems] = useState([...data]);
	const [itemId, setItemId] = useState(-1);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if (hovered) return;
		if (carouselRef.current && containerRef.current) {
			const animate = () => {
				const carousel = carouselRef.current;
				if (!carousel) return;
				const scrollLeft = carousel.scrollLeft;
				const itemWidth = parseInt(
					getComputedStyle(carousel.children[0]).width
				);

				carouselRef.current.scrollLeft = scrollLeft + itemWidth;

				const tmp = [...items.slice(1), items.shift()];
				setItems(tmp);
			};
			clearTimeout(timerRef);
			timerRef.current = setTimeout(() => {
				animate();
			}, 1000);
		}
	}, [items, hovered]);

	useEffect(() => {
		if (itemId === -1) return;

		const timer = setTimeout(() => {
			setItemId(-1);
		}, 5000);
		return () => clearTimeout(timer);
	}, [itemId]);

	const onMouseEnter = () => {
		setHovered(true);
		clearTimeout(timerRef);
	};

	const onMouseLeave = () => {
		setHovered(false);
	};

	return (
		<Container ref={containerRef}>
			{items && (
				<>
					<Title> Tech Skills </Title>
					<Carousel
						ref={carouselRef}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						{items.map((logo, i) => {
							return (
								<Button
									key={i}
									dataset={logo.id}
									onClick={() => {
										setItemId(logo.id);
									}}
								>
									{logo.icon}
								</Button>
							);
						})}
					</Carousel>
				</>
			)}
			<Description id={itemId} />
		</Container>
	);
};

export default Skills;

const Title = styled.h2`
	color: var(--dim-yellow);
	margin-bottom: 40px;
`;

const Container = styled.div`
	padding: 0.5em;
	margin-top: 10em;
	padding-bottom: 3em;
	width: 100%;
	opacity: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const Button = styled.div`
	width: 200px;
	aspect-ratio: 1;
	cursor: pointer;
	padding: 30px;

	&:hover {
		background: white;
	}
`;

const Carousel = styled.div`
	position: relative;
	overflow: hidden;
	margin-top: 1rem;
	display: flex;
	overflow-x: scroll;
	padding: 0px 16px 6px 16px;
	scroll-behavior: smooth;
	gap: 16px;
	width: 80%;
	margin-bottom: 1rem;

	&&::-webkit-scrollbar {
		display: none;
	}
`;
