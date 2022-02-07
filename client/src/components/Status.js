import React from 'react';
import image from '../img/homeself.png';
import {MdDoubleArrow} from "react-icons/md";

const Status = () => {
    
  return <div>        
    <div className = 'responsive'>
        <img className = 'absolute-image' src = {image} />
        <p  className = 'life-motto' padding = '2rem'> 
            I am currently a mechanical engineer with software engineering background. 
            I have the passion to transition into a more software-driven field. 
            I am currently looking into adding the following to my skill assets.
            <br /> 
            <br /> 
            <ul> 
                <li><MdDoubleArrow/> Next.js for better SEO</li>
                <li><MdDoubleArrow/> Monorepo</li>
                <li><MdDoubleArrow/> Docker</li>
                <li><MdDoubleArrow/> PostgreSQL</li>
            </ul>
        </p>

        
    </div>
</div>;
};

export default Status;
