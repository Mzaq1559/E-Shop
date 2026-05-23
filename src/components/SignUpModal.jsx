/**
 * SignUpModal.jsx
 *
 * Bootstrap modal that handles new user registration.
 *
 * Like LoginModal, this is entirely client-side — no API call is made.
 * On a valid submission it immediately logs the new user in by calling
 * ShopContext's `login()`, giving a seamless sign-up-then-login experience
 * without needing a separate step.
 *
 * Props:
 *  - show        {boolean}  — controls modal visibility (passed from Navigation)
 *  - handleClose {Function} — callback to hide the modal (sets showSignUp = false)
 *
 * TODO: When a backend is introduced, this should POST to a registration
 * endpoint, handle duplicate-email errors, and possibly require email verification
 * before auto-login.
 */

import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';

/**
 * SignUpModal
 *
 * @param {Object}   props
 * @param {boolean}  props.show        - Whether the modal is visible
 * @param {Function} props.handleClose - Called to close/hide the modal
 */
const SignUpModal = ({ show, handleClose }) => {
    // Three controlled fields for the registration form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Reuse the same login() action from context — sign-up auto-logs the user in
    const { login } = useContext(ShopContext);

    /**
     * handleSubmit
     * Validates that all three fields are filled, then logs the user in with
     * their chosen name (unlike LoginModal which derives the name from email).
     * Closes the modal and shows a success alert after successful sign-up.
     *
     * @param {React.FormEvent} e - The form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // All three fields are required — no partial submissions allowed
        if (name && email && password) {
            // Immediately log the new user in using the name they provided
            login({ email, name });
            handleClose();
            alert("Account created successfully!");
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up for E-Shop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {/* Full name field — autoFocus on open so the user can type right away */}
                    <Form.Group className="mb-3" controlId="signUpName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* Submit triggers the form's onSubmit, not a direct onClick */}
                    <Button variant="outline-dark" type="submit" className="w-100">
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SignUpModal;
