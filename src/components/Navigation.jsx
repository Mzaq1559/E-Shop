/**
 * Navigation.jsx
 *
 * Top-level navigation bar rendered on every page of the application.
 *
 * Features:
 *  - Brand logo linking back to Home
 *  - Standard nav links (Home, About, Shop, Contact, FAQs)
 *  - Cart icon with a live item-count badge pulled from ShopContext
 *  - Auth section: shows Login / Sign Up buttons for guests,
 *    or a greeting dropdown (Profile, Orders, Logout, optional Admin link)
 *    for logged-in users
 *  - Admin Dashboard link is conditionally shown only when the logged-in
 *    user's email matches the hardcoded admin address
 *
 * LoginModal and SignUpModal are rendered here (outside the Navbar) because
 * they need to be in the DOM regardless of which page is active.
 * Their visibility is controlled by local state in this component.
 */

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Badge, Button, NavDropdown } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

/**
 * Navigation
 *
 * Reads cart count and auth state from ShopContext.
 * Manages modal visibility with local boolean state rather than context
 * because the modals are only relevant to this component.
 */
const Navigation = () => {
    // Pull the cart count helper and auth state from global context
    const { getTotalCartItems, user, logout } = useContext(ShopContext);

    // Compute total items once per render — used for the badge
    const totalItems = getTotalCartItems();

    // Local state to control which modal (if any) is currently open
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="navbar_background" variant="dark">
                <Container fluid>
                    {/* Brand logo — clicking it navigates to the home page */}
                    <Navbar.Brand as={Link} to="/">
                        <img src="/pictures/logo.jpg" alt="Logo" />
                    </Navbar.Brand>

                    {/* Hamburger toggle — only visible on small screens (< lg breakpoint) */}
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />

                    <Navbar.Collapse id="navbarSupportedContent">
                        {/* Primary nav links pushed to the left */}
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/questions">FAQs</Nav.Link>
                        </Nav>

                        {/* Right-side controls: cart button + auth section */}
                        <div className="d-flex align-items-center">
                            {/* Cart link with a live count badge.
                                The badge only renders when there's at least one item
                                so we don't show a "0" bubble on an empty cart. */}
                            <Link to="/cart" className="btn btn-outline-light me-2 position-relative">
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                {totalItems > 0 && (
                                    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Link>

                            {/* Conditional auth section:
                                - Logged-in users see a dropdown with their name
                                - Guests see Login and Sign Up buttons */}
                            {user ? (
                                <NavDropdown title={`Hello, ${user.name}`} id="user-dropdown" align="end" className="text-light">
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Orders</NavDropdown.Item>
                                    {/* Admin link is only visible to the admin account.
                                        This is a UI-only guard — the AdminDashboard page
                                        itself also performs its own access check. */}
                                    {user.email === 'admin@eshop.com' && (
                                        <NavDropdown.Item as={Link} to="/admin">Admin Dashboard</NavDropdown.Item>
                                    )}
                                    <NavDropdown.Divider />
                                    {/* Logout calls the context handler which clears user state */}
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    {/* Open the Login modal — no page navigation needed */}
                                    <Button variant="outline-light" className="me-2" onClick={() => setShowLogin(true)}>Login</Button>
                                    {/* Open the Sign Up modal */}
                                    <Button variant="outline-light" onClick={() => setShowSignUp(true)}>Sign Up</Button>
                                </>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Modals live outside the Navbar to avoid z-index / stacking context issues */}
            <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
            <SignUpModal show={showSignUp} handleClose={() => setShowSignUp(false)} />
        </>
    );
};

export default Navigation;
