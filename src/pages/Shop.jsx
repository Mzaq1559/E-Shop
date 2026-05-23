/**
 * Shop.jsx
 *
 * The main product browsing page. Displays the full product catalogue with
 * a category filter dropdown at the top.
 *
 * Key behaviour:
 *  - On mount (or when the URL changes) it reads the `category` query parameter
 *    from the URL and sets the filter dropdown to match. This allows the Home
 *    page category cards to deep-link directly into a filtered view, e.g.:
 *      /shop?category=Consumer%20Electronics
 *  - When the user manually changes the dropdown, the filtered list updates
 *    immediately (no navigation, just local state).
 *  - Selecting "All Categories" (value = 'All') shows every product.
 *
 * Products are read from ShopContext so admin-added products appear here
 * without a full reload.
 */

import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { categories } from '../data/products';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';

/**
 * Shop
 *
 * Uses `useLocation` to read URL search params so that deep-links from the
 * Home page category grid pre-select the correct filter option.
 */
const Shop = () => {
    const { products } = useContext(ShopContext);

    // Default to 'All' — shows every product when no category is specified
    const [selectedCategory, setSelectedCategory] = useState('All');

    // useLocation gives us the current URL including the query string
    const location = useLocation();

    /**
     * Sync the dropdown selection with the URL's `category` query parameter.
     * Runs on mount and whenever the URL changes (e.g. user clicks a category
     * card on the Home page, which navigates to /shop?category=...).
     */
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        if (cat) {
            // Only update if a category param is actually present;
            // if the user navigates to /shop with no query string, keep 'All'
            setSelectedCategory(cat);
        }
    }, [location]); // Re-run any time the location object changes

    // Derive the visible product list from the current filter selection.
    // Strict equality match on category name — make sure category names in
    // products.js and categories array match exactly (watch for case differences).
    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Shop</h1>

            {/* Category filter row — centred on medium+ screens */}
            <Row className="mb-4">
                <Col md={4} className="mx-auto">
                    <Form.Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {/* Default option to show all products */}
                        <option value="All">All Categories</option>
                        {/* Render one <option> per category from the static data file */}
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            {/* Product grid — updates reactively whenever filteredProducts changes */}
            <Row>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Shop;
