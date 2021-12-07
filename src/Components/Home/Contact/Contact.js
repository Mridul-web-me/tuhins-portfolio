import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import ContactForm from './ContactForm';
import gmailIcon from '../../../images/gmail.png';

const Contact = () => {
    return (
    <>
        <div id="contact" style={{margin: '0'}} className="contact row">
            <div className="col-md-6 hire-me">
                <h3>HIRE ME</h3><br /><br />
                <p>Feel free to contact me if you’d like to connect. I’m always interested in hearing from potential clients and associates or other interesting, creative folk.</p><br />
                <div className="email-me">
                    <a style={{color: 'white'}} href="mailto:rayhan.mgt.bu@gmail.com?subject=Asking price about your services">
                        <img src={gmailIcon} alt="" />
                        <p>rayhan.mgt.bu@gmail.com</p>
                    </a>
                </div>
                
                <Container fluid className="social-media">
                    <ul className="row">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/rayhan.shahariar/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fa fa-facebook" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/ShahariarRayhan">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fa fa-twitter" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://bd.linkedin.com/in/md-rayhan-shahariar-57696a130">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fa fa-linkedin" aria-hidden="true"></span>
                            </a>
                        </li>

                    </ul>
                </Container>



            </div>
            <div className="col-md-6 contactForms">
                <ContactForm/>
            </div>
        </div>
    </>
    );
};

export default Contact;