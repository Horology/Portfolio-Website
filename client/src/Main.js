import React, { useRef, useEffect, useState } from 'react';
import { Routes ,Route, Link } from 'react-router-dom';
import { Container, AppBar} from '@material-ui/core';
import About from './pages/About.js';
import Contacts from './pages/Contacts.js';
import Home from './pages/Home.js';
import Art from './pages/Art.js';
import Code from './pages/Code.js';
import Projects from './pages/Projects.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { useSelector} from 'react-redux';
import pageLinks from './constants/links.js';


  export const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)
  
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
    }
  
    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction, options)
      if (containerRef.current) observer.observe(containerRef.current)
      
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef, options])
  
    return [containerRef, isVisible]
  }




const Main = () => {

    const [ containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:1.0
    })


    const showMenu = useSelector((state) =>state.showMobileMenu);
    const [value, setValue] = useState(1);

    let pages = (
    <Routes>
        <Route path = "/*" element = {<Home isVisible ={isVisible}/>}/> 
        <Route path = "/about/" element = {<About/>}/>
        <Route path = "/contacts/" element = {<Contacts/>}/>
        <Route path = "/art/" element = {<Art/>}/>
        <Route path = "/code/" element = {<Code/>}/>
        <Route path = "/projects/" element = {<Projects/>}/>
    </Routes>
    );

    return (
        <>
            <AppBar position = 'static' color = 'transparent'>
                <Navbar />
                <div className ={showMenu?'subbar-links-active': 'hide'}>
                    {pageLinks.map((link) => {
                        return (
                        <Link key={link.id} className = {link.id === value? 'sublinks-active':'sublinks'}  to={link.url} onClick ={() => setValue(link.id)}>
                            {link.text}
                        </Link>
                        )
                    })}
                </div>
                {pages}
            </AppBar>

            <Footer ref={containerRef} />
            
        </>
    )
}

export default Main;



