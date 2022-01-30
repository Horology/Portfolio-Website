import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import timeline from '../constants/timeline';

const About = () => {
    return(
        <Paper align = 'center' style={{ background: 'linear-gradient(to bottom, #271c33, #174522)', paddingTop:'5rem'}}>
            <h1 className = 'title-header' >About</h1>
            
            <div className = 'box'>
                <div className = 'box-programming'>
                    <h3>Programming</h3>
                    <ul>
                        <li>programming</li>
                        <li> Learning to use different CSS packages</li>
                        <li> Stack Overflow</li>
                        <li>Modeling using 3D software packages</li>
                        <li> Arduino </li>
                    </ul>
                </div>
                <div className = 'box-hobbies'>
                    <h3>Hobbies</h3>
                    <ul>
                        <li>programming</li>
                        <li>Digital painting</li>
                        <li>Learning new languages: <span> currently Japanese and Korean</span></li>
                        <li>Modeling using 3D software packages</li>
                        <li>Blender</li>
                    </ul>
                </div>
            </div>
                <p className = 'timeline'>
                {timeline.map((event) => (event.id % 2 == 0)?
                <div className = 'second'><a className = 'relative'>{event.text}</a></div> : 
                event.id == 1? <div className ='first'><a className = 'relative'>{event.text}</a></div> :
                <div className = 'third'><a className = 'relative'>{event.text}</a></div> 
                )}
                </p>

        </Paper>
    );

};


export default About;