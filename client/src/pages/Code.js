import React from 'react';
import {Link} from 'react-router-dom';
import {default as photoWeather} from '../img/thumbnails/weather-thumbnail.PNG'
import {default as photoTodo} from '../img/thumbnails/todo-thumbnail.PNG'
import {default as photoMovie} from '../img/thumbnails/movie-thumbnail.PNG'
import {default as photoCommerce} from '../img/thumbnails/commerce-thumbnail.PNG'
import {default as photoPort} from '../img/thumbnails/port-thumbnail.PNG'
import {default as photoEmp} from '../img/thumbnails/emp-thumbnail.PNG'
import GalleryCard from '../components/GalleryCard';
import {Paper, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core';


const Code = () => {
    

    return(
        <Paper align = 'center' style={{ background: '#2E3B55' , paddingTop:'5rem' }}> 
        <h1 className = 'title-header-white' >Coding Projects </h1>
        <br></br>
        <div className = 'project-container'> 
            <Grid container spacing = {6} columns={{ xs: 12, sm: 3 }}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                    <GalleryCard 
                    title = {'Weather App'}
                    image = {photoWeather}
                    date = 'December 1, 2021'
                    description = "Experimented with Unsplash and weather API. Used Typescript to develop the application. Although it is cumbersome, it did limit the amount of rendering errors that I would\'ve gotten.Use Tailwind to quickly format the application layout."
                    link = 'https://hou-demo-weather.netlify.app/'/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <GalleryCard 
                    title = {'Movie Tracker'}
                    image = {photoMovie}
                    date = 'November 4, 2021'
                    description = "Ever want to track the movie that you\'ve watched and want to watch? This app provides real-time search results of movies. Used a combination of Tailwind and regular CSS for styling"
                    link = 'https://hou-movie-tracker.netlify.app/'/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <GalleryCard 
                    title = {'To-Do List'}
                    image = {photoTodo}
                    date = 'November 15, 2021'
                    description = 'Personally keeps track of my personal tasks. Uses local storage and contextAPI to store data. Experimented with styled components in React'
                    link = 'https://hou-todo-list.netlify.app/'/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <GalleryCard 
                    title = {'Online Shopping'}
                    image = {photoCommerce}
                    date = 'December 20, 2021'
                    description = 'Created a template online shopping platform that has features like product filtering, useReducer, useAuth0, and Stripe.io.'
                    link = 'https://hou-commerce-platform.netlify.app'/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <GalleryCard 
                    title = {'Web Portfolio'}
                    image = {photoPort}
                    date = 'December 7, 2021'
                    description = 'Enjoyed building this responsive web portfolio using React and MUI. Send submitted messages are stored in MongoDB. Looking forward to improve it down the line!'
                    link = '/'/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <GalleryCard 
                    title = {'Employee Management Database'}
                    image = {photoEmp}
                    date = 'January 15, 2022'
                    description = "Created a GUI to send queries to and get responsese from a MySQL database. Used Typescript to improve codebase. It\'s currently only stored in the Github repository. Will use Heroku/ Netlify to deploy them in the server. "
                    link = 'https://github.com/Horology/Employee-Management'/>
                </Grid>
                
            </Grid>
    
        </div>
    
        </Paper>
    );

};


export default Code;