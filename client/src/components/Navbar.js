import React, {useState, useEffect, useRef}from 'react';
import {Link, useLocation} from 'react-router-dom';
import { AppBar, Box, Typography} from '@material-ui/core';
import pageLinks from '../constants/links.js';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'; 
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../actions/posts';
import Submenu from './submenu';
import {default as Logo} from '../img/profile.jpg';
import { useComponentVisible } from '../utils/helper.js';





const Navbar = () => {
    const dispatch = useDispatch();
    const iconStyle = {backgroundColor: 'transparent', color: 'white'};
    const [show, setShow] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const location = useLocation()

    return(
        <>
            <div className="navbar">
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
                    <Link to = './about/'><img className='img-container' src = {Logo}/></Link>
                </Box> 
                <Box sx={{ flexGrow: 1, align: "center", margin: 0 }}> 
                    <h1 className = 'title' > Porfolio Site </h1>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex"} }}>
                    {pageLinks.slice(0,3).map((link) => {
                        return (
                            <Link key={link.id} to={link.url} className = {location.pathname == link.url?'navbar-button active': 'navbar-button'}>
                                {link.icon}
                            </Link>
                        )
                    })}

                    {pageLinks.slice(3).map((link) => {
                        return (
                            // <button onClick = {()=>setShowSub(!showSub)} className = {showSub?'bigger-space': 'navbar-button'} key={link.id} to={link.url}>
                            //     {!showSub? <Link className = 'navbar-button' key={link.id} to={link.url}>
                            //     {link.icon}</Link>:<Submenu value = {showSub, setShowSub}/>}
                            // </button>
                                <button onClick = {()=>setShowSub(!showSub)} className = {location.pathname == '/art/' | location.pathname == '/code/'?'navbar-button active': 'navbar-button'} key={link.id} to={link.url}>
                                    {!showSub?<FaCaretUp size ={45}/> :link.icon}
                                    {!showSub ?<Submenu value = {showSub, setShowSub}/>:null}
                                </button>
                        )
                    })}
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <button style = {iconStyle} className = 'transition' onClick = {() =>{dispatch(toggleMenu()); setShow(!show)}}>
                        {show?<FaCaretUp style = {iconStyle}/>:<FaCaretDown style = {iconStyle}/>}
                    </button>
                </Box>   
            </div>
        </>

    )
};

export default Navbar;