import React from 'react';
import { Container } from 'react-bootstrap';
import backVideo from '../../../images/intro patern loop.mp4';
import styles from './HeaderBanner.module.css';
import Placeorder from './Placeorder/Placeorder';

const HeaderBanner = () => {
    return (
        <Container style={{ position: 'relative' }} fluid>
            <div className={styles.banner}>
                <video autoPlay muted loop>
                    <source src={backVideo} type="video/mp4" />
                    <source src={backVideo} type="video/ogg" />
                </video>
                <div className={styles.content}>
                    <Placeorder />
                </div>
            </div>
        </Container>
    );
};

export default HeaderBanner;