/**
 * AdminDashboard.jsx
 *
 * Protected admin panel for managing the E-Shop product catalogue.
 *
 * Access control:
 *   This component performs its own auth check — if the logged-in user is
 *   not `admin@eshop.com`, it renders an "Access Denied" screen and offers
 *   a button back to home. The navbar also hides the link for non-admins,
 *   but that's a UI-only guard and should never be the sole protection.
 *
 * Features:
 *  1. Stats Row — live product count, plus mocked order count and revenue figures
 *     (these would be fetched from a backend in a real implementation).
 *  2. Product Management Table — shows all current products with ID, image,
 *     name, category, price, and a delete button (with a confirm dialog).
 *  3. Add Product Modal — a form to add a new product to the catalogue.
 *     The new product is immediately available in the shop (via context) and
 *     is persisted to localStorage for the session.
 *
 * All product mutations delegate to ShopContext's `addProduct` / `removeProduct`.
 * Product IDs for new items are generated using `Date.now().toString()` — simple
 * and collision-free for single-user client-side use, but not suitable for a
 * multi-user backend.
 */

import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Modal } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

/**
 * AdminDashboard
 *
 * Reads user, products, addProduct, and removeProduct from ShopContext.
 * Manages the "Add Product" modal state locally since it's only relevant here.
 */
const AdminDashboard = () => {
    const { user, products, addProduct, removeProduct } = useContext(ShopContext);
    const navigate = useNavigate();

    // Controls visibility of the Add Product modal
    const [showAddModal, setShowAddModal] = useState(false);

    // Form state for the new product being entered in the modal.
    // Defaults: first category pre-selected, placeholder image path.
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: categories[0].name,
        price: '',
        image: '/pictures/1.jpg' // Default placeholder — admin can override
    });

    // ─── Access Guard ─────────────────────────────────────────────────────────
    // Simple Admin Check — gate on email match.
    // NOTE: This is client-side only and can be bypassed in DevTools.
    // A real app would validate an admin JWT or session server-side.
    if (!user || user.email !== 'admin@eshop.com') {
        return (
            <Container className="py-5 text-center">
                <h2>Access Denied</h2>
                <p>You do not have permission to view this page.</p>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </Container>
        );
    }

    // ─── Handlers ─────────────────────────────────────────────────────────────

    /**
     * handleAddProduct
     * Builds a complete product object from the modal form state, calls
     * `addProduct` to update the context (and localStorage), then resets
     * the form and closes the modal.
     *
     * @param {React.FormEvent} e - The form submit event
     */
    const handleAddProduct = (e) => {
        e.preventDefault();

        const productToAdd = {
            id: Date.now().toString(), // Timestamp as ID — unique enough for client-side use
            ...newProduct,
            price: parseFloat(newProduct.price) // Convert string input to a number
        };

        addProduct(productToAdd);
        setShowAddModal(false);

        // Reset the form back to defaults so the next Add feels fresh
        setNewProduct({ name: '', category: categories[0].name, price: '', image: '/pictures/1.jpg' });
        alert('Product added successfully!');
    };

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <Container className="py-5">
            <h1 className="mb-4">Admin Dashboard</h1>

            {/* ── Stats Row ─────────────────────────────────────────────────── */}
            <Row className="mb-5">
                {/* Total Products — derived from live context, updates when products change */}
                <Col md={4}>
                    <Card className="text-white bg-primary mb-3">
                        <Card.Header>Total Products</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>{products.length}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Total Orders — mock data, would come from an orders API */}
                <Col md={4}>
                    <Card className="text-white bg-success mb-3">
                        <Card.Header>Total Orders</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>1,234</Card.Title> {/* Mock Data */}
                        </Card.Body>
                    </Card>
                </Col>
                {/* Total Revenue — mock data, would be computed from orders */}
                <Col md={4}>
                    <Card className="text-white bg-warning mb-3">
                        <Card.Header>Total Revenue</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>$45,678</Card.Title> {/* Mock Data */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* ── Product Management ────────────────────────────────────────── */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Product Management</h2>
                {/* Opens the Add Product modal */}
                <Button variant="dark" onClick={() => setShowAddModal(true)}>
                    <i className="fas fa-plus me-2"></i>Add New Product
                </Button>
            </div>

            {/* Product table — `responsive` adds horizontal scroll on small screens */}
            <Table responsive bordered hover>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>
                                {/* Delete button — uses window.confirm to prevent accidental deletions.
                                    Note: removeProduct does NOT clean up cartItems for this product.
                                    If it was in someone's cart it will just silently disappear from totals. */}
                                <Button variant="danger" size="sm" onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this product?')) {
                                        removeProduct(product.id);
                                    }
                                }}>
                                    <i className="fas fa-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* ── Add Product Modal ─────────────────────────────────────────── */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddProduct}>

                        {/* Product name — required field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            />
                        </Form.Group>

                        {/* Category dropdown — populated from the same categories array used in Shop */}
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        {/* Price — number input with step="0.01" to allow cents */}
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                required
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            />
                        </Form.Group>

                        {/* Image URL — admin types a path manually for now.
                            TODO: Replace with a proper file upload input when a backend is available */}
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL (Use placeholder for now)</Form.Label>
                            <Form.Control
                                type="text"
                                value={newProduct.image}
                                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            />
                        </Form.Group>

                        <Button variant="success" type="submit" className="w-100">
                            Add Product
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default AdminDashboard;
