import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container-fluid mini background">
            <Container className="pt-5">
                <Row className="featurette responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7}>
                        <h2 className="featurette-heading fw-normal lh-1">About Us.</h2>
                        <p className="lead">At E-Shop, we’re committed to bringing you the best shopping experience, offering a wide range of products to suit all your needs. From essentials to unique finds, we strive to make shopping convenient, enjoyable, and reliable.</p>
                    </Col>
                    <Col md={5}>
                        <img src="/pictures/1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="About Us" />
                    </Col>
                </Row>
                <hr className="featurette-divider" />
                <Row className="featurette mt-3 responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Our Mission.</h2>
                        <p className="lead">Our mission is to create a seamless and satisfying online shopping experience by providing quality products, competitive prices, and exceptional customer service.</p>
                    </Col>
                    <Col md={5} className="order-md-1">
                        <img src="/pictures/2.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="Our Mission" />
                    </Col>
                </Row>
                <hr className="featurette-divider" />
                <Row className="featurette mt-3 responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7}>
                        <h2 className="featurette-heading fw-normal lh-1">Our Story</h2>
                        <p className="lead">Founded in 2024, E-Shop started with a simple idea: to make shopping more accessible and enjoyable for everyone. Since then, we’ve grown into a trusted destination for shoppers worldwide.</p>
                    </Col>
                    <Col md={5}>
                        <img src="/pictures/3.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="Our Story" />
                    </Col>
                </Row>
                <hr className="featurette-divider" />
                <Row className="featurette mt-3 responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Why Choose Us?</h2>
                        <div className="lead">
                            <dl>
                                <dt style={{ fontSize: '1.5rem' }}>Safe and Secure Transactions:</dt>
                                <dd>Your data privacy and security are our utmost priorities.</dd>
                                <dt style={{ fontSize: '1.5rem' }}>Fast Shipping:</dt>
                                <dd> Enjoy quick and reliable delivery services.</dd>
                                <dt style={{ fontSize: '1.5rem' }}>Easy Returns:</dt>
                                <dd> Not satisfied? We make returns simple and hassle-free.</dd>
                            </dl>
                        </div>
                    </Col>
                    <Col md={5} className="order-md-1">
                        <img src="/pictures/4.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="Why Choose Us" />
                    </Col>
                </Row>
                <hr className="featurette-divider" />
            </Container>
        </div>
    );
};

export default About;
