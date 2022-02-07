import React, {useState} from 'react';
import {data} from './svgs/SVGIcons';
import Description from './Description';

const Skills = () => {
    const [show, setShow] = useState(null)
    const [disable, setDisable] = useState(false)

    const displayDescription = (value) => {
        setShow(value);
        setDisable(1);
        setTimeout(()=>{setShow(null); setDisable(0);}, 2000);

    }

    if(!data) { return}
    return (
        <div className="outer-outer-container">
            <div className=" skills-outer-container" >
                <h2> Languages </h2>
                <div className = {show?'skills-container lighter':'skills-container'}>
                    {data.map((logo) => {
                        return(
                            <button key = {logo.id} dataset = {logo.id} 
                            onClick = {() => {displayDescription(logo.id)}}
                            disabled = {disable}>
                                {logo.icon}
                            </button>)
                    })}
                </div>
                
            </div>
            <Description value ={show}/> 
        </div>



 
  
    )
}

export default Skills
