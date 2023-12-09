import React from 'react'
import '../faq/faq.css';
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {


    return (
        <>
            <section className='section_faq' id='faq'>
                <Container>
                    <Row>
                        <div className="faq-heading"><h6>Frequently Asked Questions</h6></div>

                        <Col lg={6}>
                            <h6> <span>~</span> Is Foodies Bread Really Baked Fresh Each Day?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </Col>
                        <Col lg={6}>
                            <h6> <span>~</span> Do You Bake Breads Containing Animal Fats Or Products?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse, commodi, tempore veniam assumenda sint sit maxime consequatur recusandae molestias facilis odit? Autem, commodi impedit?</p>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={6}>
                            <h6> <span>~</span> When Are You Opening A Shop Near Me?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </Col>
                        <Col lg={6}>
                            <h6> <span>~</span> Can I Order Your Products Online?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse, commodi, tempore veniam assumenda sint sit maxime consequatur recusandae molestias facilis odit? Autem, commodi impedit?</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='paralax'>
                <div className='paralax_item'>
                    <h1>Baked Fresh Daily By Bakers With Passion</h1>
                    <button className='main-btn'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Faq
