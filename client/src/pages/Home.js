import React from 'react';
import Introduction from '../components/Introduction';
import About from './About';
import Skills from '../components/Skills';
import Software from '../components/Software';
import ImageOverlay from '../components/ImageOverlay';
import android from "../img/link.gif";
import Projects from "../pages/Projects"
import ScrollingBar from '../components/ScrollingBar';


const Home = ({isVisible}) => {


    return(
        
        <>
            <ImageOverlay/>
            <div align = 'center'> 
                <Introduction />
                <About /> 
                <Skills />
                <Software /> 
                <Projects />
                <div className="container-relative">
                    {isVisible && <img className = 'absolute' src={android} />}
                </div>
            </div>
            <ScrollingBar />
        </>
    );

};


export default Home;


