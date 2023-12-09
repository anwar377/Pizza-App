import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../new/new.css';

const New = () => {
    return (
        <section className='new_section'>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <div>
                            <h2>Hurry Up! Subscribe Our Newsletter And Get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.

                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}>
                        <form className='form'>
                            <div className='d-flex my-5'>
                                <input type='email' placeholder='Enter Email here' className='form-control'></input>
                                <button className='main-btn'>Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default New
