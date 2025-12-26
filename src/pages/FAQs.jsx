import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQs = () => {
    return (
        <div className="container-fluid background">
            <Container className="my-5">
                <h2 className="text-center m-4 pt-4">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0" id="faqAccordion">
                    <Accordion.Item eventKey="0" className="m-auto mb-3">
                        <Accordion.Header>What is e-shop?</Accordion.Header>
                        <Accordion.Body>
                            e-shop is an online platform where you can browse, purchase, and receive your favorite products from the comfort of your home.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="m-auto mb-3">
                        <Accordion.Header>How can I place an order?</Accordion.Header>
                        <Accordion.Body>
                            To place an order, browse the products, add them to your cart, and proceed to checkout where you can provide your delivery details and payment method.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="m-auto mb-3">
                        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                        <Accordion.Body>
                            We accept various payment methods, including credit cards, debit cards, PayPal, and net banking.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="m-auto mb-3">
                        <Accordion.Header>How can I track my order?</Accordion.Header>
                        <Accordion.Body>
                            Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your order on our website.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="m-auto mb-3">
                        <Accordion.Header>Can I cancel or modify my order after placing it?</Accordion.Header>
                        <Accordion.Body>
                            Provide details on the cancellation/modification process and timelines.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className="m-auto mb-3">
                        <Accordion.Header>Can I exchange an item?</Accordion.Header>
                        <Accordion.Body>
                            Ordered items can be changed within 3 hours of delivery
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className="m-auto mb-3">
                        <Accordion.Header>When will I receive my refund?</Accordion.Header>
                        <Accordion.Body>
                            Your payment will be refunded as soon as you go through certain verification steps.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default FAQs;
