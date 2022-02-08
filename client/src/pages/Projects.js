import React from 'react';
import {Link} from 'react-router-dom';
import pageLinks from '../constants/links.js';
import {default as photo} from '../img/codingPhoto.jpg';
import {default as photo2} from '../img/link_aegislash2.png';

const Projects = () => {

    return(
        <div className = "projects-background">
            <div id = "projects" className = 'projects-container'> 
                <h1 className = 'title-header' >  Current Projects</h1>
                
                <div className = 'project-container'>
                    <Link key={pageLinks[3].id} to = "/code/" className = 'project'  ><img src = {photo} alt = "Hou's Coding Projects" width = '200%'/></Link>
                    <Link key={pageLinks[3].id} to = "/art/" className = 'project' > <img src = {photo2}  alt = "Hou's Art Projects"width = '100%'/></Link>
                </div> 

            </div>
        </div>
    );

};


export default Projects;