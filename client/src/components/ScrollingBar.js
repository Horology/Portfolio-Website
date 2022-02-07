import React from 'react';
import {Link} from 'react-router-dom';
import pikachurunning from '../img/pikachu-running.gif';

const ScrollingBar = () => {
  return <div className = 'scroll-left'>
        <div>
            <img src={pikachurunning} /><span className ='contact-link'><Link to ="contacts" > Don't Go Yet! Let's Keep in Touch!</Link></span>
        </div>
  </div>;
};

export default ScrollingBar;
