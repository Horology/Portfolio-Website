import React from 'react';
import ArduinoIcon from './ArduinoIcon';
import CSSIcon from './CSSIcon';
import JavascriptIcon from './JavascriptIcon';
import TailwindIcon from './TailwindIcon';
import ExpressIcon from './ExpressIcon';
import GatsbyIcon from './GatsbyIcon';
import GithubIcon from './GithubIcon';
import GoogleIcon from './GoogleIcon';
import HTMLIcon from './HTMLIcon';
import MongoDBIcon from './MongoDBIcon';
import MUIIcon from './MUIIcon';
// import NextIcon from './NextIcon';
import NodeJSIcon from './NodeJSIcon';
// import PhotoShopIcon from './PhotoShopIcon';
import PythonIcon from './PythonIcon';
import ReactIcon from './ReactIcon';
import SassIcon from './SassIcon';
// import SocketIOIcon from './SocketIOIcon';
import TypeScriptIcon from './TypeScriptIcon';
// import BlenderIcon from './BlenderIcon';
import StackOverflowIcon from './StackOverflowIcon';
// import AutoCADIcon from './AutoCADIcon';
// import SolidWorksIcon from './SolidWorksIcon';

const size = 80


export const data = [
    {
        id:1,
        icon: <HTMLIcon size={size}/>,
        description: 'HTML',
        notes: 'Learned HTML 4 years ago to build small static websites',
    },
    {
        id:2,
        icon: <CSSIcon size={size} />,
        description: 'CSS',
        notes: 'Learned CSS while learning HTML',
    },
    {
        id:3,
        icon: <JavascriptIcon size={size} />,
        description: 'JavaScript',
        notes: 'Using Javascript to create interactive web elements',
    },
    {
        id:4,
        icon: <PythonIcon size={size} />,
        description: 'Python',
        notes: 'Learned Python years ago',
    },
    {
        id:5,
        icon: <NodeJSIcon size={size} />,
        description: 'Nodejs',
        notes: 'Used various NPM packages, such as Auth0, Stripe.io and Socket.io',
    },
    {
        id:6,
        icon: <ReactIcon size={size} />,
        description: 'React',
        notes: ' Created many interactive websites with React, including but not limited to, an online shopping platform and employment database management system',
    },
    {
        id: 7,
        icon: <GithubIcon size={size} />,
        description: 'Github',
        notes: 'Use Git to store web applications on Github',
    },
    {
        id: 8,
        icon: <TypeScriptIcon size={size} />,
        description: 'Typescript',
        notes: 'Using Typescript to improve codebase and limit deployment errors',
    },
    {
        id: 9,
        icon: <SassIcon size={size} />,
        description: 'Sass',
        notes: 'Sass changes lives with its nesting structure and mixins',
    },
    {
        id: 10,
        icon: <TailwindIcon size={size} />,
        description: 'Tailwind',
        notes: 'Provides me a quick and easy way of prototyping websites with its quick styling methods',
    },
    {
        id: 11,
        icon: <ExpressIcon size={size} />,
        description: 'Express',
        notes: 'Use Express to create servers connecting to mySQL and MongoDB and interacting with the client-side',
    },
    {
        id: 12,
        icon: <GatsbyIcon size={size} />,
        description: 'Gatsby',
        notes: 'Initially used Gatsby to create a basic website',
    },
    {
        id: 13,
        icon: <GoogleIcon size={size} />,
        description: 'Google',
        notes: 'My best friend',
    },
    {
        id: 14,
        icon: <MongoDBIcon size={size} />,
        description: 'MongoDB',
        notes: 'Using Mongo to store messaged submitted through the web portfolio',
    },
    {
        id: 15,
        icon: <MUIIcon size={size} />,
        description: 'MUI',
        notes: 'A quick and easy way of prototyping responsive components. Have customized them with Theme providers as well',
    },
    // {
        //     id: 17,
        //     icon: <NextIcon size={size} />,
        //     description: 'Nextjs',
        //     notes: 'Have a basic understanding of framework. Understands how routing and api works under the hood.',
        // },
        // {
            //     id: 18,
            //     icon: <SocketIOIcon size={size} />,
            //     description: 'SocketIO',
            //     notes: 'Have created a basic chat application with SocketIO and understands how it functions',
            // },
    {
        id: 16,
        icon: <ArduinoIcon size={size} />,
        description: 'Arduino',
        notes: 'Have create infrared and ultrasonic sensing robots with arduino',
    },
    {
        id: 17,
        icon: <StackOverflowIcon size={size} />,
        description: 'StackOverflow',
        notes: 'My second best friend',
    },
            // {
                //     id: 20,
                //     icon: <PhotoShopIcon size={size} />,
                //     description: 'Photoshop',
                //     notes: 'Uses it ocassionally to create digital artwork',
                // },
                // {
                    //     id: 21,
                    //     icon: <BlenderIcon size={size} />,
                    //     description: 'Blender',
                    //     notes: 'Have used it to sculpt and create models.',
                    // },
                    // {
                        //     id: 22,
                        //     icon: <AutoCADIcon size={size} />,
                        //     description: 'AutoCAD',
                        //     notes: 'Have used it to sculpt and create models.',
                        // },
                        // {
                            //     id: 22,
    //     icon: <SolidWorksIcon size={size} />,
    //     description: 'SolidWorks',
    //     notes: 'Have used it to sculpt and create models.',
    // },


];