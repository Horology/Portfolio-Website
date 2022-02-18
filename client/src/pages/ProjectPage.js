import React, {useState, useLayoutEffect} from 'react';
import {useParams} from 'react-router-dom';
import project_links from '../constants/project_links';
import details from '../constants/details';


const ProjectPage = () => {
  const {id} = useParams();
  const [info, setInfo] = useState();
  useLayoutEffect(() =>{
    setInfo(project_links[id-1])
  }, [])


  return (
    <>
      {info && <div className = 'introduction'>
        <br/>
        <br/>
        <img className = 'img-container' align = 'center' src = {info.image} />
        <h1 className="title-header">{info.title}</h1>
        <h3>Technologies used: {info.tech.map(t =>{
          t = t + '  '
          return(<span>{t}</span>)})}</h3>
        <p>Github Link: {info.git}</p>
        <p>Website Link: {info.link}</p>
        {/* <p>{info.description}</p> */}
        <p>{details[id-1]}</p>
      </div>}
    </>
  )
}

export default ProjectPage;