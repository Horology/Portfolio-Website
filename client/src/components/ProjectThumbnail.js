import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {BsFillDoorClosedFill,BsFillDoorOpenFill} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

export default function ProjectThumbnail({id, title, git, description, image, link, date, tech}) {
    const[show, setShow] = useState(false);

  return (
      <article className = 'project-thumbnail'>
          <div className = "thumbnail-img">
            <img src = {image} />
          </div>
          <div className = 'project-disc'>
            <div >
                <h3 className = 'proj-name'> {title}</h3>
            </div >
            <div>
                <div className = 'date'> {date}</div>
            </div>
            <div className = 'techs'>
                {tech && tech.map((t) =>{
                    return(
                        <div>{t}</div>
                    )
                })}
            </div>
            <div className = 'web-links'>
                <a href={git}>
                    <AiFillGithub size = {45}/>
                </a>
                <Link to = {`/code/${id}`}>
                    Learn More
                </Link>
                <a href={link} onMouseEnter = {() => {setShow(true)}}
                onMouseLeave = {() => {setShow(false)}}>
                    {show && show?<BsFillDoorOpenFill size = {45}/>: <BsFillDoorClosedFill size = {45}/>}
                </a>
            </div>
          </div>

      </article>

  );
}
