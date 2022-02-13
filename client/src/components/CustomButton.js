import React from 'react';
import {GrGithub} from "react-icons/gr";

const CustomButton = ({text}) => {

  return <button className = 'custom-btn'>
      <GrGithub size = {75} />
  </button>;
};

export default CustomButton;
