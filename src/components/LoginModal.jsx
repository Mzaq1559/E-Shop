/**
 * LoginModal.jsx
 *
 * Bootstrap modal that handles user login for the E-Shop application.
 *
 * This is a simulated / client-side-only login — there is no backend API call.
 * On a valid submission it calls ShopContext's `login()` with a user object
 * derived from the entered email (the part before '@' becomes the display name).
 *
 * The hardcoded admin account (admin@eshop.com) can be logged into here;
 * once the user state is set, Navigation will show the Admin Dashboard link.
 *
 * Props:
 *  - show        {boolean}  — controls modal visibility (passed from Navigation)
 *  - handleClose {Function} — callback to hide the modal (sets showLogin = false)
 *
 * TODO: Replace the simulated login with a real API call when a backend is added.
 */

import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';

/**
 * LoginModal
 *
 * @param {Object}   props
 * @param {boolean}  props.show        - Whether the modal is visible
 * @param {Function} props.handleClose - Called to close/hide the modal
 */
const LoginModal = ({ show, handleClose }) => {
    // Controlled form state — keeps inputs in sync with React's rendering
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // We only need the login action from context, not the full user object
    const { login } = useContext(ShopContext);

    /**
     * handleSubmit
     * Prevents the default form POST, validates the fields, and if both are
     * filled, calls the context login() with a user object then closes the modal.
     *
     * The display name is derived by splitting the email at '@' and taking the
     * first segment (e.g. "jane@example.com" → name: "jane").
     *
     * @param {React.FormEvent} e - The form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic presence check — a real implementation would also validate format
        if (email && password) {
            // Build a minimal user object; extend this shape when adding real auth
            login({ email, name: email.split('@')[0] });
            handleClose(); // close the modal after successful login
        } else {
            alert("Please enter email and password");
        }
    };

    return (
        // `centered` vertically centers the modal in the viewport
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login to E-Shop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {/* Email field — autoFocus so the user can start typing immediately */}
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* Full-width submit button — triggers handleSubmit via the form's onSubmit */}
                    <Button variant="outline-dark" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
