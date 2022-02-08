import React from 'react';
import CustomButton from '../components/CustomButton';
import timeline from '../constants/timeline';
import AboutMeButton from '../components/AboutMeButton';
import aboutme_descriptions from '../constants/aboutme_descriptions';

const About = () => {
    return(
        <div className = "about-background">
            <div id = "about" className = "about-container">
                <h1 className = 'title-header' >About</h1>
                {aboutme_descriptions.map((data)=>{
                    return(
                        <AboutMeButton text = {data.description}/>
                    )
                })}

                <p className = 'timeline'>
                {timeline.map((event) => (event.id % 2 == 0)?
                <div className = 'second'><a className = 'relative'>{event.text}</a></div> : 
                event.id == 1? <div className ='first'><a className = 'relative'>{event.text}</a></div> :
                <div className = 'third'><a className = 'relative'>{event.text}</a></div> 
                )}
                </p>
                <a href ='https://github.com/Horology'>
                    <CustomButton text = 'Click Here to Learn More'/>
                </a>
            </div>
        </div>
    );

};


export default About;