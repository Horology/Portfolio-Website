import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const initialForm = {
	firstName: "",
	lastName: "",
	email: "",
	message: "",
};

const ContactModal = ({ active, onCloseModal }) => {
	const [message, setMessage] = useState(initialForm);
	const [helperMessage, setHelperMessage] = useState("");

	const handleMessage = (e) => {
		e.preventDefault();
		const tempMessage = { ...message };
		tempMessage[e.target.name] = e.target.value;
		setMessage(tempMessage);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!/.+@.+\.[A-Za-z]+$/.test(message["email"])) {
			setHelperMessage("Please enter a valid email ");
			return;
		}
		setHelperMessage("");
		setMessage(initialForm);
	};

	const onKeyPress = (e) => {
		if (e.keyCode === 27) {
			onCloseModal();
		}
	};

	return (
		<Container active={active} onKeyDown={onKeyPress}>
			<Modal>
				<Row>
					<Button onClick={onCloseModal}>
						<ImCross />
					</Button>
					<Title> Send Me a Message! </Title>
				</Row>
				<Box component="form" sx={{ mt: 3 }} style={{ marginTop: "4rem" }}>
					<Grid container spacing={7}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="given-name"
								name="firstName"
								required
								fullWidth
								id="firstName"
								label="First Name"
								value={message["firstName"]}
								autoFocus
								onChange={handleMessage}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="lastName"
								label="Last Name"
								value={message["lastName"]}
								name="lastName"
								autoComplete="family-name"
								onChange={handleMessage}
							/>
						</Grid>
						<Grid item xs={12} align="center">
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								value={message["email"]}
								name="email"
								autoComplete="email"
								onChange={handleMessage}
							/>
						</Grid>
					</Grid>
					<br />
					<TextField
						required
						fullWidth
						id="outlined-multiline-flexible"
						label="Multiline"
						value={message["message"]}
						variant="outlined"
						name="message"
						multiline
						minRows={16}
						helperText="Please enter your message here"
						onChange={handleMessage}
					/>
					<Button
						type="submit"
						style={{ maxWidth: "120rem", float: "right" }}
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleSubmit}
					>
						Sent Message
					</Button>
				</Box>
				<h3>{helperMessage}</h3>
			</Modal>
		</Container>
	);
};

export default ContactModal;

const Button = styled.button`
	padding: 3px;
	margin: 3px;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 50;
	background: rgba(0, 0, 0, 0.5);
	visibility: ${({ active }) => (active ? "visibile" : "hidden")};
	opacity: ${({ active }) => (active ? "1" : "0")};
	transition: visibility 0s, opacity 0.5s linear;
`;

const Modal = styled.div`
	background: var(--bluish-black);
	border: 1px solid var(--white);
	z-index: 50;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 40px;
	input,
	input::placeholder,
	label,
	p,
	div,
	div::before,
	fieldset,
	* {
		color: white;
		border-color: white;
	}
`;

const Title = styled.h2`
	color: var(--dim-yellow);
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;
