import React from 'react'
import '../home/home.css'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <section className='home_section' id='home'>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <h1>Good food choice are good investment</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos soluta quaerat, laudantium dolorum commodi ipsa.
                        </p>
                        <div>
                            <button className='main-btn my-3 me-3'>Order Now <i class="bi bi-bag-check-fill ms-1"></i></button>
                            <button className='white-btn'>Order Now <i class="bi bi-bag-check-fill ms-1"></i></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home
