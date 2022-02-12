import React, {useLayoutEffect} from 'react';


const Synopsis = () => {

  function stairs(d) {
    var steps = 2;
    var container = d.querySelector(".staircase");
    var divs = container.querySelectorAll(':scope > div');
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.cssText = 'margin-left: ' + (steps * i) + 'em';
    }
  }

  useLayoutEffect(() => {
    stairs(document)
  }, [])


  return <div className = 'staircase'>
      <div><h3>Hello, I am a</h3></div>
      <div><h1 className = 'span-text'>Mechanical Engineer-turned </h1></div>
      <div><h1 className = 'span-text'> Software Developer </h1></div>
      <div><h3> Using automation expertise from robotics </h3></div>
      <div><h3> To pave way into software development</h3></div>
  </div>;
};

export default Synopsis;
