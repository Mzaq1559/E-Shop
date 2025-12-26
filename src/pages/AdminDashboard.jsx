import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Modal } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

const AdminDashboard = () => {
    const { user, products, addProduct, removeProduct } = useContext(ShopContext);
    const navigate = useNavigate();

    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: categories[0].name,
        price: '',
        image: '/pictures/1.jpg' // Default placeholder
    });

    // Simple Admin Check
    if (!user || user.email !== 'admin@eshop.com') {
        return (
            <Container className="py-5 text-center">
                <h2>Access Denied</h2>
                <p>You do not have permission to view this page.</p>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </Container>
        );
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const productToAdd = {
            id: Date.now().toString(), // Simple ID generation
            ...newProduct,
            price: parseFloat(newProduct.price)
        };
        addProduct(productToAdd);
        setShowAddModal(false);
        setNewProduct({ name: '', category: categories[0].name, price: '', image: '/pictures/1.jpg' });
        alert('Product added successfully!');
    };

    return (
        <Container className="py-5">
            <h1 className="mb-4">Admin Dashboard</h1>

            {/* Stats */}
            <Row className="mb-5">
                <Col md={4}>
                    <Card className="text-white bg-primary mb-3">
                        <Card.Header>Total Products</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>{products.length}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-white bg-success mb-3">
                        <Card.Header>Total Orders</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>1,234</Card.Title> {/* Mock Data */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-white bg-warning mb-3">
                        <Card.Header>Total Revenue</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>$45,678</Card.Title> {/* Mock Data */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Product Management */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Product Management</h2>
                <Button variant="dark" onClick={() => setShowAddModal(true)}>
                    <i className="fas fa-plus me-2"></i>Add New Product
                </Button>
            </div>

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

            {/* Add Product Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            />
                        </Form.Group>
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
