import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';
import {Paper, Grid} from '@material-ui/core';
import project_links from '../constants/project_links.js'


const Code = () => {

    

    return(
        <Paper align = 'center' style={{ background: 'lightblue' , paddingTop:'5rem' }}> 
        <h1 className = 'title-header-white' >Coding Projects </h1>
        <br></br>
        <div className = 'project-container'> 
            <Grid container spacing = {6} columns={{ xs: 12, sm: 3 }}>
                {project_links && project_links.map((project) =>{
                    return(
                    <Grid key ={project.id} item xs={12} sm={6} md={4} lg={4} xl={3} >
                    <ProjectThumbnail 
                    title = {project.title}
                    image = {project.image}
                    date = {project.date}
                    description = {'none'}
                    url = {project.link}
                    tech = {project.tech}
                    link = {project.link}
                    git = {project.git}/> 
                    </Grid>)
                })}
    
            </Grid>
    
        </div>
    
        </Paper>
    );

};


export default Code;