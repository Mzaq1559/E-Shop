import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { categories } from '../data/products';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';

const Shop = () => {
    const { products } = useContext(ShopContext);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        if (cat) {
            setSelectedCategory(cat);
        }
    }, [location]);

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Shop</h1>

            <Row className="mb-4">
                <Col md={4} className="mx-auto">
                    <Form.Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Shop;
