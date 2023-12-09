import React from 'react'
import '../about/about.css';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/img/img-1.png';
import img2 from '../../images/img/img-2.png';

const About = () => {
    return (
        <section className='about_section' id='about'>
            <Container>
                <Row>
                    <Col lg={7} className='py-lg-5'>
                        <img src={img1} className='img-fluid' alt='about-pic' />
                    </Col>
                    <Col lg={5} className='py-lg-5'>
                        <div className='p-lg-5'>
                            <h6>
                                We Pride Ourselves On Making Real Food From The Best Ingrediensts
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia temporibus vitae a non porro quos modi?
                            </p>
                            <button className='main-btn'>Learn More</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className='py-lg-5'>
                        <div className='p-lg-5'>
                            <h6>
                                We Make Everything By Hand With The Best Possible Ingredients
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, there live the blind texts.
                            </p>
                            <ul>
                                <li><p>Lorem, ipsum dolor sit amet.</p></li>
                                <li><p>Lorem, ipsum dolor sit  adipisicing.</p></li>
                                <li><p>Lorem, ipsum dolor sit amet elit.</p></li>
                            </ul>
                            <button className='main-btn'>Learn More</button>
                        </div>
                    </Col>
                    <Col lg={7} className='py-5'>
                        <img src={img2} className='img-fluid' alt='about-pic' />
                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default About
