import React from 'react';
import {Paper, Grid, Container} from '@material-ui/core';


const Art = () => {
    return(
        <Paper align = 'center' style={{ background: '#2E3B55', paddingTop:'5rem' }}>
            <h1 className = 'title-header-white' >Digital Art Showcase </h1>

        <p> Link to <a href="https://www.instagram.com/inksults2inkjuries/" className="">Instagram</a></p> 
        <div className = 'justify'>
            Gallery is Under Construction
        </div>
        </Paper>

        
    );

};


export default Art;