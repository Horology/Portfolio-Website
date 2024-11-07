import React from "react";
import {
	FaHome,
	FaPortrait,
	FaPencilRuler,
	FaPaintBrush,
	FaCode,
} from "react-icons/fa";
import { GiTalk } from "react-icons/gi";

const data = [
	{
		id: 1,
		text: "Home",
		url: "/",
		icon: <FaHome size={45} />,
		buttonType: 1,
	},
	{
		id: 2,
		text: "About",
		url: "/#about",
		buttonType: 2,
		icon: <FaPortrait size={45} />,
	},
	{
		id: 3,
		text: "Projects",
		url: "projects",
		buttonType: 2,
		icon: <FaPencilRuler size={45} />,
		type: {
			art: <FaPaintBrush size={30} />,
			code: <FaCode size={30} />,
		},
		projectType: {
			art: "Art",
			code: "Code",
		},
	},
	{
		id: 4,
		text: "Contact",
		url: "contacts",
		buttonType: 3,
		icon: <GiTalk size={45} />,
	},
];

export default data;
