import React from "react";
import {
	FaFacebookSquare,
	FaLinkedin,
	FaGitSquare,
	FaInstagramSquare,
} from "react-icons/fa";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaGithub,
	FaInstagram,
} from "react-icons/fa";

const data = [
	{
		id: 1,
		icon: (
			<FaFacebookSquare className="social-icon" size={30}></FaFacebookSquare>
		),
		icon2: <FaFacebookF className="social-icon"></FaFacebookF>,
		url: "https://www.facebook.com/houchong.chan",
	},
	{
		id: 2,
		icon: <FaLinkedin className="social-icon" size={30}></FaLinkedin>,
		icon2: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
		url: "https://www.linkedin.com/in/houchong-chan/",
	},
	{
		id: 3,
		icon: <FaGitSquare className="social-icon" size={30}></FaGitSquare>,
		icon2: <FaGithub className="social-icon"></FaGithub>,
		url: "https://github.com/houchongchan/",
	},
	{
		id: 4,
		icon: (
			<FaInstagramSquare className="social-icon" size={30}></FaInstagramSquare>
		),
		icon2: <FaInstagram className="social-icon"></FaInstagram>,
		url: "https://www.instagram.com/inksults2inkjuries/",
	},
];

export default data;
