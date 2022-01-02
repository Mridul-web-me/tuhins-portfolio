import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImage from '../../../images/artist.jpg';
import profilePicture from '../../../images/rayhan2.jpeg';
import './About.css';
import artisrHead from './../../../images/WhitelogoLogo.png'

const About = () => {
    return (
        <>
            <div id='about' className="row" style={{ margin: '0' }}>
                <div style={{ padding: '0', backgroundColor: '#07b3cc' }} className="col-md-7 about-name d-flex justify-content-center align-items-center"><img className="artist-head-img" src={artisrHead} alt="" /></div>
                <div style={{ padding: '0' }} className="col-md-5 about-img">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            <div className="row" style={{ margin: '0', backgroundColor: '#eee' }}>
                <div style={{ padding: '0' }} className="col-md-4 profile-picture">
                    <img src={profilePicture} alt="" />
                </div>
                <div className="col-md-8 profile-data">
                    <h5>Who I am:</h5>
                    <p>I’m Rayhan, also known as Presentation design wizard. I’m an award-winning presentation designer (ICT Division Bangladesh Award 2018). I’m currently working at Microsoft as their TOP PPT EXPERT. I’m the founder of Design and Dev INN and a visual presentation design expert, visual storytelling, and data visualization.</p>

                    <h5>My Unique Perspective:</h5>
                    <p>I have been in the presentation design professionally for 7+ years, including 5+ years of a hard drill in sales deck design, pitch deck design, marketing and meeting presentation design, e-learning course design, PowerPoint animations on a daily basis. These experiences have made me extremely well trained, effective, and confident.</p>

                    <h5>What I Do:</h5>
                    <p>I have a knack for designing eye-catching Presentation, illustrations, and data visualization.  My aim is not only to present the data /content but also to tell visual stories using data and content, which reveal viral potential, helping my clients attract new customers and improve their sales and getting audience attractions during their presentation. </p>

                    <h5>The People I Help:</h5>
                    <p>From tech giant, digital marketing specialists, content strategists, e-learning company, corporate giant and creative directors to CEOs and start-up founders, I’ve helped many brands, organizations, creative agencies, and media services by crafting and designing compelling visual stories to boost their (or their clients’) business and services.</p>
                </div>
            </div>

        </>
    );
};

export default About;