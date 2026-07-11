import React from 'react'
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
import Hero from './Hero';
import Awards from './Awards';

function HomaPage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/> 
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        

        </>
     );
}

export default HomaPage;