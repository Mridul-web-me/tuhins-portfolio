import React from 'react';
import { Container } from 'react-bootstrap';
import './Pricing.css'


const Pricing = () => {
    const handleChange = (event) => {
        let selectedFile = event.target.files;
        let file = null;
        let fileName = "";
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            let fileToLoad = selectedFile[0];
            fileName = fileToLoad.name;
            // FileReader function for read the file.
            let fileReader = new FileReader();
            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                file = fileLoadedEvent.target.result;
                // Print data in console
                console.log(file);
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    
      
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const data = e.target;
        console.log(data);
    }
    return (
        <Container style={{backgroundColor: 'yellow', paddingTop: '5rem',paddingBottom: '2rem'}} fluid>
                <div className="clients-text">
                    <h2 style={{marginBottom: '3rem'}} className="clients-head">Pricing</h2>
                </div>
                <div className="pricingForm">
                {/* <div class="holder">
                        <div class="preloader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div> */}
                </div>
        </Container>
    );
};

export default Pricing;