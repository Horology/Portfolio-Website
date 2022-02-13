import React, {useState} from 'react';


const AboutMeButton = ({text}) => {
    const firstchar = text.slice(0,1).toUpperCase();
    const remain = text.slice(1)
    const [show, setShow] = useState(null)
    
    const handleEnter = (e) => {
        e.preventDefault();
        setShow(1)
    }
    const handleLeave = (e) => {
        e.preventDefault();
        setShow(null)
    }

    return <div className = 'red-btn-container'>
        <button onMouseEnter = {handleEnter} 
        onMouseLeave = {handleLeave}
        className = 'red-btn'><span>{firstchar}</span></button> 
        {show && <span>{remain}</span>}
    </div>;
};

export default AboutMeButton;
