import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SeeDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SeeDown = () => {
    return (
        <Container className="d-flex justify-content-center see-down" fluid>
            <a data-aos="fade-down" href="#work"><FontAwesomeIcon icon={faChevronDown} size="2x" color="white" /></a>
        </Container>
    );
};

export default SeeDown;