import React from 'react';
import Common from './Common';
import web from "../src/images/02.svg";
import {NavLink} from "react-router-dom";



const About = () => {
    return ( 
    <>
    <Common
    imgsrc={web}
    name="Welcome to About page"
    visit="/About"
    btname="Contact us"

    />

    </>
    );
};


export default About;