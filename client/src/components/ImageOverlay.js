import React, { useRef, useEffect } from 'react'
import video from '../img/hero.mov'

const ImageOverlay = props => {
  
    
  return <div className = 'image-container'>
      <video className = 'hero' src = {video} autoPlay loop muted type = 'video/mp4'><a href="https://www.vecteezy.com/video/1625419-clouds-and-sky-animated-background">Clouds and sky animated background Stock Videos by Vecteezy</a></video>
  </div>
}


export default ImageOverlay;