import React from 'react';
import {Link} from 'react-router-dom';
import pageLinks from '../constants/links.js';
import {default as photo} from '../img/codingPhoto.jpg';
import {default as photo2} from '../img/link_aegislash2.png';

const Projects = () => {

    return(
        <div className = "projects-background">
            <div id = "projects" className = 'projects-container'> 
                <h1 className = 'title-header-white' >  Current Projects</h1>
                
                <div className = 'project-container'>
                    <Link key={pageLinks[3].id} to = "/code/" className = 'project'  ><img src = {photo} alt = "Hou's Coding Projects" /><div className = 'projTitle'>{pageLinks[3].projectType.code}</div></Link>
                    <Link key={pageLinks[3].id} to = "/art/" className = 'project' > <img src = {photo2}  alt = "Hou's Art Projects"/><div className = 'projTitle'>{pageLinks[3].projectType.art}</div></Link>
                </div> 

            </div>
        </div>
    );

};


export default Projects;