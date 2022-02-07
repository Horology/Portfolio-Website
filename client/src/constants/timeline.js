import React from 'react';
import { FaHome, FaPortrait, FaPhone, FaPencilRuler} from 'react-icons/fa'; 

const timeline = [
    {
      id: 1,
      text: "Born in 1996 in Macau.",
      icon: <FaHome size={30}/>,
    },
    {
      id: 2,
      text: "Immigrated to the US at the age of 6.",
      icon: <FaPortrait size={30}/>,
    },
    {
      id: 3,
      text: "Started Mechanical engineering at Cooper Union.",
      icon: <FaPhone size={30}/>,

    },
    {
      id: 4,
      text: "Inspired to learn many things such as robotics and programming.",
      icon: <FaPencilRuler size={30}/>,
    },
    {
      id: 5,
      text: "Graduated and started work as a Mechanical Engineer.",
      icon: <FaPencilRuler size={30}/>,
    },
    {
      id: 6,
      text: "Currently working on Web application projects on the side.",
      icon: <FaPencilRuler size={30}/>,
    },
]
  
export default timeline;

