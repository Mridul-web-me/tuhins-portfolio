import React, { useState } from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import MainBody from '../MainBody/MainBody';
import NavBar from '../NavBar/NavBar';
import SeeDown from '../SeeDown/SeeDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import './Home.css';


const Home = () => {
    const [ backToTop, setBackToTop] = useState(false);

    const changeBackToTop = () => {
        if (window.scrollY >= 80) {
            setBackToTop(true);
        }
        else{
            setBackToTop(false);
        }
    };
    window.addEventListener('scroll', changeBackToTop);
    return (
        <div id="home" style={{ backgroundColor: "#dbcbcb"}}>
            <NavBar/>
            <HeaderBanner></HeaderBanner>
            <SeeDown/>
            <MainBody/>
            {/* <div className={backToTop ? 'back-to-top-icon' : 'back-to-top-icon-None'}>
                <a href="#home"><FontAwesomeIcon icon={faChevronCircleUp} size="3x" /></a>
            </div> */}
            <a
                href="https://wa.me/+8801989605121"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    );
};

export default Home;