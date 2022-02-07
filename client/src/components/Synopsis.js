import React from 'react';


const Synopsis = () => {

  (function(w,d) {

    var steps = 2;
    w.addEventListener("load", function() {
      var container = d.querySelector(".staircase");
      var divs = container.querySelectorAll(':scope > div');
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.cssText = 'margin-left: ' + (steps * i) + 'em';
      }
    }, false);
    
  }(window,document));


  return <div className = 'staircase'>
      <div><h3>Hello, My name is</h3></div>
      <div><h1 className = 'span-text'> Hou Chong Chan.</h1></div>
      <div><h2>Focus on Web Development</h2></div>
      <div><h3>Most experienced with React (MERN). </h3></div>
   
  </div>;
};

export default Synopsis;
