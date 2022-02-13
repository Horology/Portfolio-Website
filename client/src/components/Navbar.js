import React, {useEffect, useState}from 'react';
import { Box} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import pageLinks from '../constants/links.js';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'; 
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../actions/posts';
import {default as Logo} from '../img/profile.jpg';
import { HashLink } from 'react-router-hash-link';
import Submenu from './submenu.js';


const Navbar = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showSub, setShowSub] = useState(false);

    const  hash  = useLocation();

    useEffect(() => {
        if( hash.url == '/' ) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0; 
        }
    },[])

    const handleClick = (e) =>{
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    return(
        <>
            <div className="navbar">
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
                    <Link to = '/#about'><img className='profile-pic' src = {Logo}/></Link>
                </Box> 
                <Box sx={{ flexGrow: 1, align: "center", margin: 0 }}> 
                    <h1 className = 'title' > Hou </h1>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex"} }}>
                    <button  onClick = {handleClick} button><Link className = 'navbar-button' to = '/#' >{pageLinks[0].icon}</Link> </button>
                    <HashLink className = 'navbar-button' to = "/#about"> {pageLinks[1].icon} </HashLink>
                    <Link className = 'navbar-button ' to = '/contacts' >{pageLinks[2].icon} </Link>
                    {pageLinks.slice(3).map((link) => {
                        return (
                                <button className = 'navbar-transition' onClick = {()=>setShowSub(!showSub)} >
                                    {!showSub?<FaCaretUp size ={45}/> :link.icon}
                                    {!showSub ?<Submenu value = {showSub, setShowSub}/>:null}
                                </button>
                        )
                    })}
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <button  className = 'transition' onClick = {() =>{dispatch(toggleMenu()); setShow(!show)}}>
                        {show?<FaCaretUp className = 'transition' color = 'white' size = {30}/>
                        :<FaCaretDown className = 'transition' color = 'white' size = {30}/>}
                    </button>
                    
                </Box>   
            </div>
        </>

    )
};

export default Navbar;