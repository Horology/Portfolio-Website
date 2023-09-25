import React from "react";
import { FaHome, FaPortrait, FaPhone, FaPencilRuler } from "react-icons/fa";

const timeline = [
	{
		id: 1,
		text: "Born in 1996 in Macau and immigrated to the US at the age of 6.",
		icon: <FaHome size={30} />,
	},
	{
		id: 2,
		text: "Started Mechanical engineering at Cooper Union. Worked on robotics and programming",
		icon: <FaPortrait size={30} />,
	},
	{
		id: 3,
		text: "Graduated and started work as a Mechanical Engineer. Worked on Web applications on the side as a hobby",
		icon: <FaPhone size={30} />,
	},
	{
		id: 4,
		text: "Working oin all fronts at Adra.ai, including Cloud infra, databases, AGILE, CI/CD, React FrontEnd and Django BackEnd",
		icon: <FaPencilRuler size={30} />,
	},
];

export default timeline;
