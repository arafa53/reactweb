import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from "./Navbar";
import Footer from './Footer'

const App =() =>{
    return ( 
    <>

    <Navbar/>
    <switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
   
    
    </switch>
    <Footer/>


    </>
    );
};


export default App;
