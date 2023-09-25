import { default as photoEmp } from "../components/img/thumbnails/emp-thumbnail.PNG";
import { default as photoWeather } from "../components/img/thumbnails/weather-thumbnail.PNG";
import { default as photoTodo } from "../components/img/thumbnails/todo-thumbnail.PNG";
import { default as photoMovie } from "../components/img/thumbnails/movie-thumbnail.PNG";
import { default as photoCommerce } from "../components/img/thumbnails/commerce-thumbnail.PNG";
import { default as photoPort } from "../components/img/thumbnails/port-thumbnail.PNG";
import { default as svg } from "../components/img/thumbnails/svg-thumbnail.png";
import { default as coordinates } from "../components/img/thumbnails/coordinates.png";
import { default as editor } from "../components/img/thumbnails/editor.png";
import { default as grid } from "../components/img/thumbnails/grid.png";
import { default as chords } from "../components/img/thumbnails/chords.png";
import { default as trivia } from "../components/img/thumbnails/trivia.png";
import { default as animal } from "../components/img/thumbnails/animal.png";
import { default as jeopardy } from "../components/img/thumbnails/jeopardy.png";

const project_links = [
	{
		id: 1,
		title: "Weather App",
		image: photoWeather,
		date: "December 1, 2021",
		tech: ["Typescript", "API"],
		description:
			"Experimented with Unsplash and weather API. Used Typescript to develop the application. Although it is cumbersome, it did limit the amount of rendering errors that I would've gotten.Use Tailwind to quickly format the application layout.",
		git: "https://github.com/Horology/City-Weather-App-",
		link: "https://hou-demo-weather.netlify.app/",
	},
	{
		id: 2,
		title: "Movie Tracker",
		image: photoMovie,
		date: "November 4, 2021",
		tech: ["React", "TailwindCSS"],
		description:
			"Ever want to track the movie that you've watched and want to watch? This app provides real-time search results of movies. Used a combination of Tailwind and regular CSS for styling",
		git: "https://github.com/Horology/Movie-Database-Tracker",
		link: "https://hou-movie-tracker.netlify.app/",
	},
	{
		id: 3,
		title: "To-Do List",
		image: photoTodo,
		date: "November 15, 2021",
		tech: ["StyledComp", "React"],
		description:
			"Personally keeps track of my personal tasks. Uses local storage and contextAPI to store data. Experimented with styled components in React",
		git: "https://github.com/Horology/To-Do-List-",
		link: "https://hou-todo-list.netlify.app/",
	},
	{
		id: 4,
		title: "Online Shopping",
		image: photoCommerce,
		date: "December 20, 2021",
		tech: ["Stripe.io", "Auth0", "Redux"],
		description: "",
		git: "https://github.com/Horology/Online-Shopping-Platform",
		link: "https://hou-commerce-platform.netlify.app",
	},
	{
		id: 5,
		title: "Web Portfolio",
		image: photoPort,
		date: "December 7, 2021",
		tech: ["React", "MongoDB"],
		description: "",
		git: "https://github.com/Horology/Portfolio-Website",
		link: "/",
	},
	{
		id: 6,
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
		id: 7,
		title: "Animal Crossing Trivia",
		image: trivia,
		date: " Mar 8, 2022",
		tech: ["React"],
		description: "",
		git: "https://hou-ac-map-trivia.netlify.app",
		link: "https://hou-ac-map-trivia.netlify.app",
	},
	{
		id: 8,
		title: "Chord Editor",
		image: chords,
		date: "August 10, 2023",
		tech: ["React", "Typescript"],
		description: "",
		git: "https://github.com/houchongchan/chord-editor",
		link: "https://chords-editor.netlify.app",
	},
	{
		id: 9,
		title: "Polygon Editor",
		image: editor,
		date: "Jan 31, 2023",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/PolygonEditor",
		link: "https://test-polygon.netlify.app",
	},
	{
		id: 10,
		title: "Image Grid Cropper",
		image: grid,
		date: "Feb 26, 2023",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/Image-Grid-Cropper",
		link: "https://image-grid-cropper.netlify.app",
	},
	{
		id: 11,
		title: "SVG Editor",
		image: svg,
		date: "Mar 10, 2023",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/svg-editor",
		link: "https://svg-ui-editor.netlify.app/",
	},
	{
		id: 12,
		title: "Polygon Coordinate Marker",
		image: coordinates,
		date: "May 7, 2023",
		tech: ["React"],
		description: "",
		git: "https://github.com/houchongchan/polygon-coordinate-generator",
		link: "https://polygon-coordinate-marker.netlify.app",
	},
	{
		id: 13,
		title: "Animal Dataset Scraper",
		image: animal,
		date: "August 2, 2023",
		tech: ["Python", "Bash"],
		description: "",
		git: "https://github.com/houchongchan/Animal-Dataset-Scraper",
	},
	{
		id: 14,
		title: "Jeopardy Template Application",
		image: jeopardy,
		date: "August 21, 2023",
		tech: ["Angular", "Typescript"],
		description: "",
		git: "https://github.com/houchongchan/Jeopardy-App",
		link: "https://jeopardy-template.netlify.app/",
	},
];

export default project_links;
