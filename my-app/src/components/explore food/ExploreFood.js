import React from 'react'
import '../explore food/exploreFood.css';
import { Container, Row, Card, Col } from 'react-bootstrap'
import img3 from '../../images/img/img-3.jpg';
import img4 from '../../images/img/img-4.jpg';
import img5 from '../../images/img/img-5.jpg';

const ExploreFood = () => {
    return (
        <section className='explore_section' id='explore'>
            <Container>
                <Row className='text-center explore_text'>
                    <div>
                        <h2>Explore Food</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi et, repellat commodi odit ut! Soluta et repellat nisi blanditiis quis fuga laborum. Amet sit sed adipisci nesciunt inventore, cupiditate sint numquam. Accusamus.</p>
                    </div>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <img src={img3} className='img-fluid' alt='pic' />
                            <Card.Body>
                                <Card.Title>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Text>
                                    Time: 10 - 15 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$10.50</span> <del>$13.20</del>
                                </p>

                                <button className='main-btn mt-3'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={6}>
                        <Card >
                            <img src={img4} className='img-fluid' alt='pic' />
                            <Card.Body>
                                <Card.Title>Vegetarian Burger</Card.Title>
                                <Card.Text>
                                    Time: 15 - 20 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$11.50</span> <del>$13.20</del>
                                </p>
                                <button className='main-btn mt-3'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={6}>
                        <Card >
                            <img src={img5} className='img-fluid' alt='pic' />
                            <Card.Body>
                                <Card.Title>Raspberry French Toast</Card.Title>
                                <Card.Text>
                                    Time: 20 - 25 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$13.50</span> <del>$15.20</del>
                                </p>
                                <button className='main-btn mt-3'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExploreFood
