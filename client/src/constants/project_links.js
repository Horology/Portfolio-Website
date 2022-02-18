import {default as photoEmp} from '../img/thumbnails/emp-thumbnail.PNG'
import {default as photoWeather} from '../img/thumbnails/weather-thumbnail.PNG'
import {default as photoTodo} from '../img/thumbnails/todo-thumbnail.PNG'
import {default as photoMovie} from '../img/thumbnails/movie-thumbnail.PNG'
import {default as photoCommerce} from '../img/thumbnails/commerce-thumbnail.PNG'
import {default as photoPort} from '../img/thumbnails/port-thumbnail.PNG'
import details from './details.js'

const project_links = [
    {
     id: 1, 
     title: 'Weather App', 
     image: photoWeather,
     date: 'December 1, 2021',
     tech: ['Typescript','API'],
     description: 'Experimented with Unsplash and weather API. Used Typescript to develop the application. Although it is cumbersome, it did limit the amount of rendering errors that I would\'ve gotten.Use Tailwind to quickly format the application layout.',
     git: 'https://github.com/Horology/City-Weather-App-',
     link: 'https://hou-demo-weather.netlify.app/'  
    },
    {
        id: 2, 
        title: 'Movie Tracker', 
        image: photoMovie,
        date: 'November 4, 2021',
        tech: ['React','TailwindCSS'],
        description: 'Ever want to track the movie that you\'ve watched and want to watch? This app provides real-time search results of movies. Used a combination of Tailwind and regular CSS for styling',
        git: 'https://github.com/Horology/Movie-Database-Tracker',
        link: 'https://hou-movie-tracker.netlify.app/'  
    },
    {
        id: 3, 
        title: 'To-Do List', 
        image: photoTodo,
        date: 'November 15, 2021',
        tech: ['StyledComp','React'],
        description: 'Personally keeps track of my personal tasks. Uses local storage and contextAPI to store data. Experimented with styled components in React',
        git: 'https://github.com/Horology/To-Do-List-',
        link: 'https://hou-todo-list.netlify.app/'  
    },
    {
        id: 4, 
        title: 'Online Shopping', 
        image: photoCommerce,
        date: 'December 20, 2021',
        tech: ['Stripe.io','Auth0', 'Redux'],
        description: '',
        git:'https://github.com/Horology/Online-Shopping-Platform',
        link: 'https://hou-commerce-platform.netlify.app'  
    },
    {
        id: 5, 
        title: 'Web Portfolio', 
        image: photoPort,
        date: 'December 7, 2021',
        tech: ['React','MongoDB'],
        description: '',
        git:'https://github.com/Horology/Portfolio-Website',
        link: '/'  
    },
    {
        id: 6, 
        title: 'Employee Database', 
        image: photoEmp,
        date: 'January 15, 2022',
        tech: ['React','MySQL', 'Express', 'Typescript'],
        description: 'Created a GUI to send queries to and get responsese from a MySQL database. Used Typescript to improve codebase. It\'s currently only stored in the Github repository. Will use Heroku/ Netlify to deploy them in the server.',
        git: 'https://github.com/Horology/Employee-Management',
        link: 'https://github.com/Horology/Employee-Management'  
    },

]
for(let i = 0; i < details.length, i++;){
    project_links["detail"].add(details[i])
}

export default project_links;