import React from 'react';
import image from '../img/homeself.png';
import {MdDraw} from "react-icons/md";
import {BiCodeAlt} from "react-icons/bi";
import {AiOutlineRead} from "react-icons/ai";
import wave from '../img/wave.svg';

const paragraphs = [
    { 
        title: 'Loves Learning',
        description: 'Yes, I do have an addiction I\'ll admit. I have an addiction to learning. Trying to learn Japanese, Koreane, etc...',
        icon: < AiOutlineRead size = {45}/> 
    },
    {
        title: 'Constantly Improving',
        description: 'Web development is already improving. I\'m always looking for the next big thing. Trying to add Next.js, Turborepo, Docker, and PostgreSQL to my skillset',
        icon: <BiCodeAlt size = {45} />
    },
    {
        title: 'Blending Code and Art',
        description: 'I like to express my creativity in code and in art.',
        icon: <MdDraw size = {45} />
    }
]
const Status = () => {
    
  return <div className = 'responsive'>        
    <img className = 'absolute-image' src = {image} />
    <div className = 'details-container'>
        {paragraphs.map(para => {
            return(
                <div className = 'life-motto'>
                    {para.icon}
                    <h2> {para.title}</h2>
                    <p> {para.description}</p>
                    <img className = 'wave1' src = {wave} />
                    <img className = 'wave2' src = {wave} />
                </div>
            )   
        })}
    </div>

    </div>
};

export default Status;
