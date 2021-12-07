import React, { useState } from 'react';
import "./NavBar.css";
import logo from '../../../images/Logo.png'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [ navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);

    const changeNavBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeNavBackground);
    return (
        <>
            <nav className={navbar ? 'navbars activeNav' : 'navbars'}>
                <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <img style={{marginLeft: '0'}} className="nav-logo" src={logo} alt="logo" />
                </a>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                    <a
                        href="#home"
                        className={navbar ? 'nav-links navMenuColor' : 'nav-links'}
                        
                    >
                        HOME
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#work"
                        className={navbar ? 'nav-links navMenuColor' : 'nav-links'}
                        
                    >
                        WORK
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#services"
                        className={navbar ? 'nav-links navMenuColor' : 'nav-links'}
                        
                    >
                        SERVICES
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#about"
                        className={navbar ? 'nav-links navMenuColor' : 'nav-links'}
                        
                    >
                        ABOUT
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#contact"
                        className={navbar ? 'nav-links navMenuColor' : 'nav-links'}
                        
                    >
                        CONTACT
                    </a>
                    </li>
                    
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;