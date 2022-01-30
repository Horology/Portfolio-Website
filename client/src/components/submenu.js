import React, {useState, useEffect, useRef}  from 'react'; 
import {Link} from 'react-router-dom';
import pageLinks from '../constants/links.js';


const Submenu = (props) => {


    return (
        <div className = {props.value?'submenu-container show': 'submenu-container none'}>
            <>
                <Link  to = '/code/' className = 'work'>{pageLinks[3].type.code}</Link>
                <Link to = '/art/' className = 'work'>{pageLinks[3].type.art}</Link>
            </>
        </div>
    )
}


export default Submenu;