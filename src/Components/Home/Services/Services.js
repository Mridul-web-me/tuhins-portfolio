import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import presentationDesign from './../../../images/PresentationDesign.png';
import PitchDeckDesign from './../../../images/PitchDeck.png';
import creativeDirecting from './../../../images/CreativeDirecting.png';
import presentationConsulting from './../../../images/Consulting.png';



import { faBullhorn, faChartBar, faPencilAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    useEffect(()=> {
        Aos.init({duration: 1500});
    },[]);
    return (
        <Container fluid id="services" style={{backgroundColor: '#fff', paddingTop: '5rem',paddingBottom: '2rem', paddingLeft: '0', paddingRight: '0'}} >
            <div className="services-text">
                <h5 className="services-head">SERVICES</h5>
                <p className="services-paragraph">Creative designs that capture audience interest and inspire them to take action.</p>
            </div>
            <div style={{margin: '4rem auto', padding: ''}} className="row">
                <div data-aos-once="true" data-aos="zoom-in-down" className="col-md-3 service-box">
                    <div className="service-box-single">
                        <div className="icon"><img src={presentationDesign} alt="" /></div>
                        <h4>Presentation Design</h4>
                        <p>From sketch to professional and interactive presentation. – I’ve completed more  than 1000+ projects and I’ve designed 10,000+ slides.</p>
                    </div>
                </div>
                <div data-aos-once="true" data-aos="zoom-in-down" className="col-md-3 service-box">
                    <div className="service-box-single">
                        <div className="icon"><img src={PitchDeckDesign} alt="" /></div>
                        <h4>Pitch deck design </h4>
                        <p>From tech giants to young start-ups, I’ve supported many companies to help them through their expansion. ’ve completed more  than 300+ pitch deck design projects.</p>
                    </div>
                </div>
                <div data-aos-once="true" data-aos="zoom-in-down" className="col-md-3 service-box">
                    <div className="service-box-single">
                        <div className="icon"><img src={creativeDirecting} alt="" /></div>
                        <h4>Creative Directing</h4>
                        <p>From initial ideas to detailed concept data visualizations, storyboards and visual information design.</p>
                    </div>
                </div>
                <div data-aos-once="true" data-aos="zoom-in-down" className="col-md-3 service-box">
                    <div className="service-box-single">
                        <div className="icon"><img src={presentationConsulting} alt="" /></div>
                        <h4>Presentation Consulting</h4>
                        <p>Boost your presentation content strategy with individual or team education based on a visual storytelling approach.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;