import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../about/about.css';

const Story = () => {
    return (
        <section className='section_story'>
            <Container>
                <Row>
                    <div className='about_story text-center'>
                        <div>
                            <h2>When A Man's Stomach Is Full It Makes No Difference Whether He Is Rich Or Poor.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sequi sit impedit laudantium, facere similique repellendus ad provident exercitationem aliquam sed maxime.</p>
                            <button className='main-btn'>Learn More</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Story
