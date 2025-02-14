import React from "react";
import styled from "styled-components";

const Code = () => {
	return (
		<>
			<Title>Coding Projects </Title>
			<ThumbnailContainer></ThumbnailContainer>
		</>
	);
};

export default Code;

const Title = styled.h2`
	color: var(--dim-yellow);
	text-align: center;
	margin: 2rem;
`;

const ThumbnailContainer = styled.div`
	padding: 4rem;
	margin-left: 100px;
`;
