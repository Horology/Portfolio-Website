import React from 'react';
import { FaHome, FaPortrait, FaPhone, FaPencilRuler, FaPaintBrush, FaCode} from 'react-icons/fa'; 
import {GiTalk} from 'react-icons/gi';


const data = [
    {
      id: 1,
      text: "Home",
      url: "/",
      icon: <FaHome size={45}/>,
    },
    {
      id: 2,
      text: "About",
      url: "/#about",
      icon: <FaPortrait size={45}/>,
    },
    {
      id: 3,
      text: "Contacts",
      url: "contacts",
      icon: <GiTalk size={45}/>,

    },
    {
      id: 4,
      text: "Projects",
      url: "projects",
      icon: <FaPencilRuler size={45}/>,
      type:{
        art:<FaPaintBrush size={30}/>,
        code:<FaCode size={30}/>,
      },
      projectType:{
        art: 'Art',
        code:'Code'
      },
    },
];
  
export default data;

