import { FaCreditCard, FaBook } from "react-icons/fa";
import React from "react";

const data = [
	{
		page: "projects",
		links: [
			{ label: "art", icon: <FaCreditCard />, url: "/art/" },
			{ label: "code", icon: <FaBook />, url: "/code/" },
		],
	},
];

export default data;
