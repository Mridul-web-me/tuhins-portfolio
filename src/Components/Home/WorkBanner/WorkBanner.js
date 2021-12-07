import React, { useEffect } from 'react';
import { Badge, Container } from 'react-bootstrap';
import './WorkBanner.css';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WorkBanner = () => {
    const SpecialDiv = styled.div`
        height: 100%;
        width: 90%;
        margin: 0 auto;
        `;
        useEffect(()=> {
            
        },[]);

    return (
            <div style={{marginRight: '0', marginLeft: '0'}} className="row">
                <div className="col-md-8 work-details-text">
                    <p style={{color: 'white', fontSize: '25px'}}>I have designed presentation and pitch deck for nine of the 100 biggest companies on the Fortune Global 500 List (2020): Exor Group, Microsoft, Home Depot, Legal & General Group, Hitachi, Enel, Citigroup, Bosch and Dell.</p>
                    
                </div>
                <div className="col-md-4 work-services-text">
                    <p style={{color: '#07b3cc', fontSize: '25px'}}>Services</p>
                        <Container fluid>
                            <a href="#">
                                <h5 
                                    data-aos-once="true" 
                                    data-aos-delay="10" 
                                    data-aos-duration="800" 
                                    data-aos="fade-left"
                                >
                                    <Badge pill variant="info">Presentation Design <br /></Badge>
                                </h5>
                            </a>
                            <a href="#">
                                <h5
                                    data-aos-once="true" 
                                    data-aos-delay="300" 
                                    data-aos-duration="800" 
                                    data-aos="fade-left"
                                >
                                    <Badge pill variant="info">Pitch Deck Design<br /></Badge>
                                </h5>
                            </a>
                            <a href="#">
                                <h5
                                    data-aos-once="true" 
                                    data-aos-delay="400" 
                                    data-aos-duration="800" 
                                    data-aos="fade-left"
                                >
                                    <Badge pill variant="info">PowerPoint Animation</Badge>
                                </h5> 
                            </a>
                            <a href="#">
                                <h5
                                    data-aos-once="true" 
                                    data-aos-delay="500" 
                                    data-aos-duration="800" 
                                    data-aos="fade-left"
                                >
                                    <Badge pill variant="info">Creative Director</Badge>
                                </h5>
                            </a>
                            <a href="#">
                                <h5
                                    data-aos-once="true" 
                                    data-aos-delay="600" 
                                    data-aos-duration="800" 
                                    data-aos="fade-left"
                                >
                                    <Badge pill variant="info">Presentation Consultant </Badge>
                                </h5>
                            </a>
                        </Container>
                </div>
            </div>
    );
};

export default WorkBanner;