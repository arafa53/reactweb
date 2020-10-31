import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/01.svg";
import Common from './Common';

const Home =() =>{
    return ( 
    < >
    <Common
    imgsrc={web}
    name="Grow your business with"
    visit="/Service"
    btname="Get started"
    />
    </>
    );
};


export default Home;