import React, { useRef, useEffect } from 'react'
import video from '../img/hero.mov';
import {Link} from 'react-scroll'
import {MdOutlineKeyboardArrowDown as Md} from 'react-icons/md'

const ImageOverlay = () => {
  
    
  return <div className = 'image-container'>
      <video className = 'hero' src = {video} autoPlay loop muted type = 'video/mp4'><a href="https://www.vecteezy.com/video/1625419-clouds-and-sky-animated-background">Clouds and sky animated background Stock Videos by Vecteezy</a></video>
      <Link  to = "intro" spy = {true} smooth = {true} className = 'go-down'>
        <Md value = {{color: 'navy'}} size = {70}/>
      </Link>
      <h1 className = 'hero-text'> Welcome!</h1>
  </div>
}


export default ImageOverlay;