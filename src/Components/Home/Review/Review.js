import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from 'react-bootstrap';
import './Review.css';

import SwiperCore, { Autoplay, EffectFlip,Pagination,Navigation } from 'swiper/core';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { addTocart } from "../../../redux/actions/cartActions";
import { connect } from "react-redux";
  SwiperCore.use([Autoplay,EffectFlip,Pagination,Navigation]);

const Review = (props) => {
    
    const {reviews} = props;
    return (
        <Container style={{backgroundColor: '#07b3cc', paddingTop: '5rem',paddingBottom: '2rem'}} fluid>
                <div className="clients-text">
                    <h2 style={{marginBottom: '3rem'}} className="review-head">WHAT CLIENT SAY</h2>
                </div>
                <div className="special-testimonial1">
                <Swiper slidesPerView={3} 
                        spaceBetween={30} 
                        pagination={{ "clickable": true }} 
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                          }} 
                          className="mySwiper">

                    {
                        reviews.map( review =>
                            <SwiperSlide>
                                <div className="review-box">
                                    <div className="review-text">
                                    <FontAwesomeIcon icon={faQuoteLeft} size="3x" color="rgba(149, 102, 234, 0.5)" />
                                        <img src={review.image} alt="" />
                                        <h5>{review.name}</h5>
                                        <small>{review.position}</small>
                                        <p><FontAwesomeIcon icon={faQuoteLeft} /> {review.message} <FontAwesomeIcon icon={faQuoteRight} /></p>
                                    </div>
                                </div>
                            </SwiperSlide>   
                        )
                    }
  
                </Swiper>
                </div>

                {/* special testimonials */}
                <div className="special-testimonial2">
                <Swiper 
                effect={'flip'}
                grabCursor={true} 
                pagination={true}
                navigation={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                className="mySwiper">
                    {
                        reviews.map( review =>
                            <SwiperSlide>
                                <div className="review-box">
                                    <div className="review-text">
                                        <FontAwesomeIcon icon={faQuoteLeft} size="3x" color="rgba(149, 102, 234, 0.5)" />
                                        <img src={review.image} alt="" />
                                        <h5>{review.name}</h5>
                                        <small>{review.position}</small>
                                        <p><FontAwesomeIcon icon={faQuoteLeft} />{review.message}<FontAwesomeIcon icon={faQuoteRight} /></p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        )
                    }
                </Swiper>
                </div>
        </Container>
    );
};


const mapStateToProps = state => {
    return {
        // cart: state.cart,
        // works: state.works,
        reviews: state.reviews
    }
}

const mapDispatchToProps = {
    addTocart: addTocart
}


export default connect(mapStateToProps, mapDispatchToProps)(Review);