import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Badge } from 'react-bootstrap';

const ContactForm = () => {
    const [ sent, setSend ] = useState({step: 1})
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_v82ddcw', 'template_yy5wi1o', e.target, 'user_CooPDPhs9DdW8TSRkfvlQ')
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setSend({ step: 2 });
      }

      const { step } = sent;

    switch (step) {
        case 1:
            return (
                <div className="contactForm">
                    <form onSubmit={sendEmail}>
                        <h2>SEND MESSAGE</h2>
                        <div className="inputBox">
                            <input type="text" name="user_name" id="" required="required"/> 
                            <span>Full Name</span>                            
                        </div>
                        <div className="inputBox">
                            <input type="text" name="user_email" id="" required="required"/>
                            <span>Email</span>                             
                        </div>
                        <div className="inputBox">
                            <textarea name="message" required="required"></textarea>
                            <span>Type Your Message...</span>                             
                        </div>
                        <div className="inputBox">
                            <input name="" type="submit" value="send" />                            
                        </div>
                    </form>
                </div>
            );
        case 2:
            return (
                <div className="contactForm">
                    <h1>
                        <Badge pill variant="info">Sent Successfully</Badge>
                    </h1>
                </div>
            );
    }
};

export default ContactForm;