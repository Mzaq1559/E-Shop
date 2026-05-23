/**
 * Contact.jsx
 *
 * Customer feedback / contact form page.
 *
 * The form collects:
 *  - Email address
 *  - A free-text review
 *  - Two open questions ("How did you hear about us?" and a competitor comparison)
 *  - Two checkbox confirmations (satisfaction and account ownership)
 *
 * Originally this form was wired up to a Google Apps Script endpoint in the
 * static HTML version of the site. In the React port, form submission is
 * intercepted by `handleGoogleSubmit` which prevents the default browser POST
 * and shows a simple success alert instead.
 *
 * TODO: If real form submission is needed, consider:
 *   - EmailJS (client-side, no backend required)
 *   - A serverless function (Netlify/Vercel) that forwards to an email service
 *   - Re-connecting to the original Google Apps Script via a fetch() POST
 */

import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

/**
 * Contact
 *
 * Uncontrolled form — inputs are not bound to React state because we don't
 * need to read the values in JS (the original design just submitted to an
 * external endpoint). If validation or pre-filling is ever needed, convert
 * to controlled inputs with useState.
 */
const Contact = () => {
    /**
     * handleGoogleSubmit
     *
     * Intercepts the form submit event. In the original HTML site this form
     * POSTed directly to a Google Apps Script URL. Here we prevent that
     * default navigation and show a confirmation message instead.
     *
     * @param {React.FormEvent} e - The form submit event
     */
    const handleGoogleSubmit = (e) => {
        // Prevent the browser from doing a full-page form POST
        e.preventDefault();
        alert("Thank you! Your form has been submitted successfully.");
    };

    return (
        <div className="container-fluid background">
            <Container className="p-3 pb-5">
                <Form onSubmit={handleGoogleSubmit}>

                    {/* Email — used to identify the submitter for follow-up */}
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="Email Address" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    {/* Review — open-ended feedback text area */}
                    <Form.Group className="mb-3" controlId="formReview">
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" placeholder="Review" name="Review" style={{ height: '130px' }} />
                    </Form.Group>

                    {/* Question 1 — how did they discover us (shorter textarea) */}
                    <Form.Group className="mb-3" controlId="formQ1">
                        <Form.Label>How did you hear about us?</Form.Label>
                        <Form.Control as="textarea" name="Question 01" style={{ height: '60px' }} />
                    </Form.Group>

                    {/* Question 2 — competitor comparison (single-line but styled taller via height) */}
                    <Form.Group className="mb-3" controlId="formQ2">
                        <Form.Label>How would you compare our products to our competitors'?</Form.Label>
                        <Form.Control type="text" name="Question 02" style={{ height: '60px' }} />
                    </Form.Group>

                    {/* Checkbox 1 — overall platform satisfaction */}
                    <Form.Group className="mb-2" controlId="formSatisfaction">
                        <Form.Check type="checkbox" label="Are you altogether satisfied with our platform" />
                    </Form.Group>

                    {/* Checkbox 2 — account ownership confirmation */}
                    <Form.Group className="mb-2" controlId="formAccount">
                        <Form.Check type="checkbox" label="Do you have a account" />
                    </Form.Group>

                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
