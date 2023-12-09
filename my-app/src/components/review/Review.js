import React from 'react'
import '../review/review.css';
import Carousel from 'react-bootstrap/Carousel';
import review1 from '../../images/review/review-1.jpg';
import review2 from '../../images/review/review-2.jpg';
import { Container, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <section className='review_section' id='review'>
            <Container>
                <Row>
                    <div className='text-center text-white'>
                        <h1>Testimonials</h1>
                    </div>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='review_items'>
                                    <div>
                                        <img src={review1} className='img-fluid' alt='review-1' />
                                    </div>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis? Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                                    <h5>James Allen</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='review_items'>
                                    <div>
                                        <img src={review2} className='img-fluid' alt='review-1' />
                                    </div>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis? Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                                    <h5>Jeneffer Shoo</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='review_items'>
                                    <div>
                                        <img src={review1} className='img-fluid' alt='review-1' />
                                    </div>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis? Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                                    <h5>James Allen</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>


        </section>
    )
}

export default Review
