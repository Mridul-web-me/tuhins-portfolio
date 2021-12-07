import React, { useEffect } from 'react';
import './MainBody.css';
import Work from '../Work/Work';
import WorkBanner from '../WorkBanner/WorkBanner';
import styled from 'styled-components'
import Services from '../Services/Services';
import About from '../About/About';
import { Container } from 'react-bootstrap';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Pricing from '../Pricing/Pricing';



const MainBody = () => {
        const SpecialDiv = styled.div`
      height: 100%;
      width: 95%;
      margin: 0 auto;
    `;

    useEffect(()=> {
        Aos.init({duration: 2000});
    },[]);

    return (
        <Container fluid className="main-body-container" style={{transform: 'translateY(-42px)'}}>
            <WorkBanner/>
            <Work/>
            <Services/>
            <About/>
            <Review/>
            <Clients/>
            <Contact/>
            <Footer/>
            {/* <Review/> */}
        </Container>
    );
};

export default MainBody;