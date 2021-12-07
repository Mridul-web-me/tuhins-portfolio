import React from 'react';
import { Container } from 'react-bootstrap';
import './Clients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faChartBar, faPencilAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import client1 from '../../../images/microsoft.png';
import client2 from '../../../images/Exor.png';
import client3 from '../../../images/Legal&general.png';
import client4 from '../../../images/Thehome.png';
import client5 from '../../../images/Dell.png';

const Clients = () => {
    return (
        <Container style={{backgroundColor: '#fff', paddingTop: '5rem',paddingBottom: '2rem', paddingLeft: '0', paddingRight: '0'}} fluid>
            <div className="clients-text">
                <h5 className="clients-head">CLIENTS</h5>
                <p className="clients-paragraph">From stratus to large corporations, media services, and major creative agencies, I've worked with hundreds of respected and well-known clients around the globe.</p>
            </div>
            <div style={{margin: 'auto', padding: '1rem'}} className="row">
                <div className="col-md-2 clients-box">
                    <div className="clients-box-single">
                        <img src={client1} alt="" />
                    </div>
                </div>
                <div className="col-md-2 clients-box">
                    <div className="clients-box-single">
                        <img src={client2} alt="" />
                    </div>
                </div>
                <div className="col-md-2 clients-box">
                    <div className="clients-box-single">
                        <img src={client3} alt="" />
                    </div>
                </div>
                <div className="col-md-2 clients-box">
                    <div className="clients-box-single">
                        <img src={client4} alt="" />
                    </div>
                </div>
                <div className="col-md-2 clients-box">
                    <div className="clients-box-single">
                        <img src={client5} alt="" />
                    </div>
                </div>
                
                
                
            </div>
        </Container>
    );
};

export default Clients;