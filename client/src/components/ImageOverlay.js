import React, { useRef, useEffect } from 'react'

const ImageOverlay = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount, i) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath()
    ctx.moveTo(120 + i, 120 + i);
    ctx.lineTo((frameCount)+130, (frameCount)+130);
    ctx.closePath();
    ctx.stroke();
  }

  
  // useEffect(() => {
    
  //   const canvas = canvasRef.current
  //   const context = canvas.getContext('2d')
  //   let frameCount = 0
  //   let animationFrameId
    
  //   //Our draw came here
  //   const render = () => {
  //     frameCount++
  //     for (let i = 0; i < 30; i++){
  //       draw(context, frameCount, i)
  //     }
  //       animationFrameId = window.requestAnimationFrame(render)
      
  //     if( frameCount == 30){
  //       frameCount = 0
  //     }
  //   }
  //   render()
    
  //   return () => {
  //     window.cancelAnimationFrame(animationFrameId)
  //   }
  // }, [draw])
  
  return <div className = 'image-container'>
    {/* <canvas id = 'canvas' width="1000px" height="500px" ref={canvasRef} {...props}/> */}
    {/* <video controls autoplay muted loop >
      <source className = 'vid-container' src="/videos/arrowup2.mp4" type="video/mp4" />
    </video> */}
  </div>
}

export default ImageOverlay