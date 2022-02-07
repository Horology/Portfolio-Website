import React, {useState}from 'react';
import { Box} from '@material-ui/core';
import pageLinks from '../constants/links.js';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'; 
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../actions/posts';
import {default as Logo} from '../img/profile.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Submenu from './Submenu';


const Navbar = () => {
    const dispatch = useDispatch();
    // const iconStyle = {backgroundColor: 'transparent', color: 'white'};
    const [show, setShow] = useState(false);
    const [showSub, setShowSub] = useState(false);

    return(
        <>
            <div className="navbar">
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
                    <Link to = '/#about'><img className='img-container' src = {Logo}/></Link>
                </Box> 
                <Box sx={{ flexGrow: 1, align: "center", margin: 0 }}> 
                    <h1 className = 'title' > Porfolio Site </h1>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex"} }}>
                    {pageLinks.slice(0,3).map((link) => {
                        return (
                            <Link key={link.id} to= {`${link.url}`}
                            className = 'navbar-button '
                            >
                                {link.icon}
                            </Link>
                        )
                    })}

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
                        {show?<FaCaretUp className = 'transition'/>:<FaCaretDown className = 'transition'/>}
                    </button>
                    
                </Box>   
            </div>
        </>

    )
};

export default Navbar;