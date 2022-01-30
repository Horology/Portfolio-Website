import React from 'react';
import Skills from '../components/Skills';
import {Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import android from "../img/link.gif";
import Projects from "../pages/Projects"
import image from '../img/homeself.png';

const Home = ({isVisible}) => {


    return(
        <Paper align = 'center' style={{ background: 'linear-gradient(to bottom, #271c33, #174522)', paddingTop:'5rem'}}> 

            <h1 className = 'title-header' >Welcome!</h1>

            <div align = 'center'> 
                <h1 className = 'introduction'>
                    <h4>Hello, My name is</h4>
                       <span className = 'span-text'> Hou Chong Chan.</span>  
                       <h2>
                            Focus on Web Development,
                        </h2>
                       <h2>
                        most experienced with React, MERN stack. 
                        </h2>
                </h1>
                
                <div className = 'responsive'>
                    <img className = 'absolute-image'src = {image} />
                    <p  className = 'life-motto' padding = '2rem'> I am currently a mechanical engineer with software engineering background. I have the passion to transition into a more software-driven field </p>
                </div>
                <div className = 'context'>
                    <p>Here, you can find the
                        <Link className = 'span-text' to='/projects/'>
                            projects
                        </Link> 
                    that I've been working on.</p>
                    <p>I like to 
                        <Link className = 'span-text' to='/code/'>
                            code
                        </Link> 
                         and create 
                        <Link className = 'span-text' to='/art/'>
                            digital artwork
                        </Link>  
                        in my free time</p>
                </div>
                <Skills />
                <hr style={{ backgroundColor: 'white' , margin: '0', border: '5px solid'}}/>
                <Projects />
                <div className="container-relative">
                    {isVisible && <img className = 'absolute' src={android} />}
                </div>
            </div>
        </Paper>
    );

};


export default Home;


