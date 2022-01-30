import React from 'react';
import { FaHome, FaPortrait, FaPhone, FaPencilRuler} from 'react-icons/fa'; 

const timeline = [
    {
      id: 1,
      text: "Born in 1996 in Macau",
      icon: <FaHome size={30}/>,
    },
    {
      id: 2,
      text: "Immigrated to the US at the age of 6",
      icon: <FaPortrait size={30}/>,
    },
    {
      id: 3,
      text: "Mechanical engineering at Cooper Union",
      icon: <FaPhone size={30}/>,

    },
    {
      id: 4,
      text: "Graduation, working as a mechanical engineer",
      icon: <FaPencilRuler size={30}/>,
    },
    {
      id: 5,
      text: "Currently working on projects",
      icon: <FaPencilRuler size={30}/>,
    },
]
  
export default timeline;

