import React from 'react';
import {Link} from 'react-router-dom';
import {default as photoWeather} from '../img/thumbnails/weather-thumbnail.PNG'
import {default as photoTodo} from '../img/thumbnails/todo-thumbnail.PNG'
import {default as photoMovie} from '../img/thumbnails/movie-thumbnail.PNG'
import {default as photoCommerce} from '../img/thumbnails/commerce-thumbnail.PNG'
import GalleryCard from '../components/GalleryCard';
import {Paper, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core';


const Code = () => {
    

    return(
        <Paper align = 'center' style={{ background: '#2E3B55' , paddingTop:'5rem' }}> 
        <h1 className = 'title-header' >Coding Projects </h1>
        <br></br>
        <div className = 'project-container'> 
            <Grid container spacing = {6} columns={{ xs: 12, sm: 3 }}>
                <Grid item xs={4} >
                    <GalleryCard 
                    title = {'Weather App'}
                    image = {photoWeather}
                    date = 'December 1, 2021'
                    description = 'Experimented with Unsplash and weather API. Great learning experience using the weather
                    Typescript in the application. Use Tailwind to quickly format the application layout.'
                    link = 'https://hou-demo-weather.netlify.app/'/>
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard 
                    title = {'Movie Tracker'}
                    image = {photoMovie}
                    date = 'November 4, 2021'
                    description = 'Provide real-time search results of movies. Stores movies watched and movies on your watchlist. Used a combination of Tailwind and regular CSS for styling'
                    link = 'https://hou-movie-tracker.netlify.app/'/>
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard 
                    title = {'To-Do List'}
                    image = {photoTodo}
                    date = 'November 15, 2021'
                    description = 'Uses local storage and contextAPI to store data. Experimented with styled components for React'
                    link = 'https://hou-todo-list.netlify.app/'/>
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard 
                    title = {'Online Shopping'}
                    image = {photoCommerce}
                    date = 'December 20, 2021'
                    description = 'Created an online shopping platform that has features like product filtering, useReducer, useAuth0, and Stripe'
                    link = 'https://hou-commerce-platform.netlify.app'/>
                </Grid>
                
            </Grid>
    
        </div>
    
        </Paper>
    );

};


export default Code;