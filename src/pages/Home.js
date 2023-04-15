import React from 'react'; 
import Header from '../layout/Header';
import Banner from '../components/Banner'; 
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import Footer from '../layout/Footer';
const Home = () => {
    return (
      <div>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Team/>
        <ContactUs/>
        <Footer/>
      </div>
    );
}

export default Home;
