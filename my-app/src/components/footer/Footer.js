import React from 'react'
import '../footer/footer.css';
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <section className='footer_section'>
            <Container>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <div className='d-flex text'>
                            <ul className='d-flex'>
                                <li><a>Resgiter</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Affliatex</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div>
                            <ul className='d-flex gap-4'>
                                <li><a><i class="bi bi-twitter"></i></a></li>
                                <li><a><i class="bi bi-facebook"></i></a></li>
                                <li><a><i class="bi bi-youtube"></i></a></li>
                                <li><a><i class="bi bi-dribbble"></i></a></li>
                                <li><a><i class="bi bi-linkedin"></i></a></li>
                                <li><a><i class="bi bi-instagram"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <div className='d-flex gap-3 justify-content-center copyright'>
                        <div>
                            © 2023.
                        </div>
                        <div>Anwar Ansari</div>
                        <div>
                            All Right Reserved
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
