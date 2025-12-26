import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Badge, Button, NavDropdown } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const Navigation = () => {
    const { getTotalCartItems, user, logout } = useContext(ShopContext);
    const totalItems = getTotalCartItems();

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="navbar_background" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src="/pictures/logo.jpg" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/questions">FAQs</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="btn btn-outline-light me-2 position-relative">
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                {totalItems > 0 && (
                                    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Link>

                            {user ? (
                                <NavDropdown title={`Hello, ${user.name}`} id="user-dropdown" align="end" className="text-light">
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Orders</NavDropdown.Item>
                                    {user.email === 'admin@eshop.com' && (
                                        <NavDropdown.Item as={Link} to="/admin">Admin Dashboard</NavDropdown.Item>
                                    )}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <Button variant="outline-light" className="me-2" onClick={() => setShowLogin(true)}>Login</Button>
                                    <Button variant="outline-light" onClick={() => setShowSignUp(true)}>Sign Up</Button>
                                </>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
            <SignUpModal show={showSignUp} handleClose={() => setShowSignUp(false)} />
        </>
    );
};

export default Navigation;
