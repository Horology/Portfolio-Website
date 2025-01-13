import { default as photoEmp } from "../components/img/thumbnails/emp-thumbnail.PNG";
// import { default as photoWeather } from "../components/img/thumbnails/weather-thumbnail.PNG";
// import { default as photoTodo } from "../components/img/thumbnails/todo-thumbnail.PNG";
// import { default as photoMovie } from "../components/img/thumbnails/movie-thumbnail.PNG";
import { default as photoCommerce } from "../components/img/thumbnails/commerce-thumbnail.PNG";
import { default as photoPort } from "../components/img/thumbnails/port-thumbnail.PNG";
import { default as svg } from "../components/img/thumbnails/svg-thumbnail.png";
import { default as coordinates } from "../components/img/thumbnails/coordinates.png";
import { default as grid } from "../components/img/thumbnails/grid.png";
import { default as chords } from "../components/img/thumbnails/chords.png";
import { default as trivia } from "../components/img/thumbnails/trivia.png";
import { default as animal } from "../components/img/thumbnails/animal.png";
import { default as jeopardy } from "../components/img/thumbnails/jeopardy.png";

const project_links = [
	{
		id: 1,
		title: "Online Shopping",
		image: photoCommerce,
		date: "December 20, 2021",
		tech: ["Stripe.io", "Auth0", "Redux"],
		description: "",
		git: "https://github.com/Horology/Online-Shopping-Platform",
		link: "https://hou-commerce-platform.netlify.app",
	},
	{
		id: 2,
		title: "Web Portfolio",
		image: photoPort,
		date: "December 7, 2021",
		tech: ["React", "MongoDB"],
		description: "",
		git: "https://github.com/Horology/Portfolio-Website",
		link: "/",
	},
	{
		id: 3,
		title: "Employee Database",
		image: photoEmp,
		date: "January 15, 2022",
		tech: ["React", "MySQL", "Express", "Typescript"],
		description:
			"Created a GUI to send queries to and get responsese from a MySQL database. Used Typescript to improve codebase. It's currently only stored in the Github repository. Will use Heroku/ Netlify to deploy them in the server.",
		git: "https://github.com/Horology/Employee-Management",
		link: "https://github.com/Horology/Employee-Management",
	},
	{
		id: 4,
		title: "Animal Crossing Trivia",
		image: trivia,
		date: " Mar 8, 2022",
		tech: ["React"],
		description: "",
		git: "https://hou-ac-map-trivia.netlify.app",
		link: "https://hou-ac-map-trivia.netlify.app",
	},
	{
		id: 5,
		title: "Polygon Coordinate Marker",
		image: coordinates,
		date: "May 7, 2023",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/polygon-coordinate-generator",
		link: "https://polygon-coordinate-marker.netlify.app",
	},
	{
		id: 6,
		title: "Animal Dataset Scraper",
		image: animal,
		date: "August 2, 2023",
		tech: ["Python", "Bash"],
		description: "",
		git: "https://github.com/houchongchan/Animal-Dataset-Scraper",
	},
	{
		id: 7,
		title: "Jeopardy Template Application",
		image: jeopardy,
		date: "August 21, 2023",
		tech: ["Angular", "Typescript"],
		description: "",
		git: "https://github.com/houchongchan/Jeopardy-App",
		link: "https://jeopardy-template.netlify.app/",
	},
	{
		id: 8,
		title: "Chord Editor",
		image: chords,
		date: "August 10, 2024",
		tech: ["React", "Typescript"],
		description: "",
		git: "https://github.com/houchongchan/chord-editor",
		link: "https://chords-editor.netlify.app",
	},
	{
		id: 9,
		title: "SVG Editor",
		image: svg,
		date: "November 10, 2024",
		tech: ["React", "Typescript"],
		description: "",
		git: "https://github.com/houchongchan/svg-editor",
		link: "https://svg-ui-editor.netlify.app/",
	},
	{
		id: 10,
		title: "Polygon / Clip Path Generator",
		image: grid,
		date: "Jan 12, 2025",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/Image-Grid-Cropper",
		link: "https://masked-polygons.netlify.app",
	},
];

export default project_links;
