import React, { useRef, useEffect } from 'react'

const ImageOverlay = props => {
  
  const canvasRef = useRef(null)
  

  const update = (ctx, object) => {
    // Draw Canvas Space
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = 'red';
    // ctx.fillRect( 0 , 0 , ctx.canvas.width, ctx.canvas.height);
    // Draw Triangle
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3; 
    ctx.beginPath();
    ctx.moveTo(
      object.x + object.r * Math.cos(object.a), 
      object.y - object.r * Math.sin(object.a), 
    )
    ctx.lineTo(
      object.x - object.r * (Math.cos(object.a) + Math.sin(object.a)), 
      object.y + object.r * (Math.sin(object.a) - Math.cos(object.a)), 
    )
    ctx.lineTo(
      object.x - object.r * (Math.cos(object.a) - Math.sin(object.a)), 
      object.y + object.r * (Math.sin(object.a) + Math.cos(object.a)), 
    )
    ctx.closePath();
    ctx.strokeRect(object.x + object.r + 10, 
      object.y, 
      object.r, object.r)
    ctx.strokeRect(object.x - 2* object.r - 10, 
      object.y, 
      object.r, object.r)
    ctx.stroke();

  }

  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const SHIPSIZE = 80
    let animationFrameId
    
    let triangle = {
      x: context.canvas.width/2,
      y: context.canvas.height/2,
      r: SHIPSIZE/2,
      a: 90 / 180 * Math.PI  //convert to radians 
    }
    
    // function render() {
    //   // let time = new Date().getTime();
    //   for (let i = 0; i < 30; i++){
    //     update(context, triangle)
    //   }
    //   // animationFrameId = window.requestAnimationFrame(render)
    // }
    // let clear = setInterval(render, 1000/30 )
    // render()
    update(context, triangle)
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      // clearInterval(clear)
    }
  }, [])
  
  return <div className = 'image-container'>
    <canvas id = 'canvas' width="1000px" height="500px" ref={canvasRef} {...props}/> 
      <video controls autoplay muted loop >
      <source className = 'vid-container' src="/videos/arrowup2.mp4" type="video/mp4" />
    </video>
  </div>
}

export default ImageOverlay