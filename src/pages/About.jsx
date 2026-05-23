/**
 * About.jsx
 *
 * Static informational page that describes the E-Shop brand and values.
 *
 * Layout: four alternating Bootstrap "featurette" rows, each pairing a block
 * of text on the left (or right via order-md-2) with a supporting image.
 * This alternating pattern is a Bootstrap convention for long-form content pages.
 *
 * Sections:
 *  1. About Us    — general brand intro
 *  2. Our Mission — what the company strives to achieve
 *  3. Our Story   — founding background (est. 2024)
 *  4. Why Choose Us — USPs: secure transactions, fast shipping, easy returns
 *
 * No state or props needed — this is a fully static component.
 * Images reference files in /public/pictures/ (1.jpg–4.jpg).
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * About
 *
 * Purely presentational — renders static brand content.
 * Update the text below if the brand messaging changes.
 */
const About = () => {
    return (
        // `.background` class applies the site's branded background from index.css
        <div className="container-fluid mini background">
            <Container className="pt-5">

                {/* ── Featurette 1: About Us ──────────────────────────────────────── */}
                <Row className="featurette responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7}>
                        <h2 className="featurette-heading fw-normal lh-1">About Us.</h2>
                        <p className="lead">At E-Shop, we're committed to bringing you the best shopping experience, offering a wide range of products to suit all your needs. From essentials to unique finds, we strive to make shopping convenient, enjoyable, and reliable.</p>
                    </Col>
                    <Col md={5}>
                        <img src="/pictures/1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="About Us" />
                    </Col>
                </Row>

                <hr className="featurette-divider" />

                {/* ── Featurette 2: Our Mission ───────────────────────────────────── */}
                {/* order-md-2 on the text column pushes it to the right on md+ screens,
                    making the image appear on the left — achieving the alternating layout */}
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

                {/* ── Featurette 3: Our Story ─────────────────────────────────────── */}
                <Row className="featurette mt-3 responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7}>
                        <h2 className="featurette-heading fw-normal lh-1">Our Story</h2>
                        <p className="lead">Founded in 2024, E-Shop started with a simple idea: to make shopping more accessible and enjoyable for everyone. Since then, we've grown into a trusted destination for shoppers worldwide.</p>
                    </Col>
                    <Col md={5}>
                        <img src="/pictures/3.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="380" alt="Our Story" />
                    </Col>
                </Row>

                <hr className="featurette-divider" />

                {/* ── Featurette 4: Why Choose Us ────────────────────────────────── */}
                <Row className="featurette mt-3 responsive pr-2 pl-2 pt-2 pb-2 mb-5">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Why Choose Us?</h2>
                        {/* Using a definition list (<dl>) to pair USP headings with descriptions */}
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
