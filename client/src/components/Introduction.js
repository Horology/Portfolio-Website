import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';
import Synopsis from './Synopsis';
import Status from './Status';
import socialLinks from '../constants/social_links';


const Introduction = () => {
  return <div className = 'introduction'>
        <h1 className = 'title-header' >Welcome!</h1>
        <br />
        <Synopsis />
        <h4></h4>
        <br/>
        <div className = 'social-links'> 
            {socialLinks.map(link => {
                return(
                    <a href = {link.url} key = {link.id } className = 'links'> 
                        <i>{link.icon2}</i>
                    </a>
                )
            })}
        </div>
        <Status /> 
        
        <div className = 'context'>
            <p>Here, you can find the
                <HashLink className = 'span-text' to= {`/#projects`}>
                    Projects
                </HashLink> 
            that I've been working on.</p>
            <p>I like to 
            <Link className = 'span-text' to='/code/'>
                Code
            </Link> 
            and create 
            <Link className = 'span-text' to='/art/'>
                Digital Artwork
            </Link>  
            in my free time</p>
        </div>
        
  </div>;
};

export default Introduction;
