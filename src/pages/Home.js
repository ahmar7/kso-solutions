import React from 'react';
// import coffeeIconDefinition from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../layout/Header';
import Banner from '../components/Banner'; 
import About from '../components/About';
import Services from '../components/Services';
const Home = () => {
    return (
      <div>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
      </div>
    );
}

export default Home;
