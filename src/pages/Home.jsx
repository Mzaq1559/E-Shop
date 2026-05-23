/**
 * Home.jsx
 *
 * Landing page of the E-Shop application.
 *
 * Sections (top to bottom):
 *  1. Hero Carousel    — three rotating banner images using Bootstrap's <Carousel fade>
 *  2. Category Grid    — one box per category, each with a "See more" link that
 *                        deep-links into the Shop page with the category pre-selected
 *  3. Featured Products — the first 4 products from the global list shown as cards
 *
 * Products and categories are pulled from ShopContext / the static data file
 * so that any admin additions automatically appear in the featured section on
 * the next render.
 */

import React, { useContext } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { categories } from '../data/products';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

/**
 * Home
 *
 * Reads the live product list from context (rather than the static import)
 * so admin-added products can appear in the featured section without a full
 * page reload.
 */
const Home = () => {
    const { products } = useContext(ShopContext);

    // Show only the first 4 products as "featured" — simple slice for now.
    // Could be improved to show products flagged as featured in the data layer.
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* ── Section 1: Hero Carousel ────────────────────────────────────── */}
            {/* `fade` prop enables a cross-fade transition instead of a slide */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pictures/carousel1.jpg"
                        alt="First slide"
                        style={{ height: '360px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pictures/carousel2.jpg"
                        alt="Second slide"
                        style={{ height: '360px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pictures/carousel3.jpg"
                        alt="Third slide"
                        style={{ height: '360px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>

            {/* ── Section 2: Category Grid ─────────────────────────────────────── */}
            {/* The .shop_section and .box classes are defined in index.css */}
            <div className="shop_section">
                {categories.map((cat) => (
                    <div key={cat.id} className="box">
                        <div className="box_content">
                            <h5>{cat.name}</h5>
                            {/* CSS background-image keeps aspect ratio consistent across categories */}
                            <div
                                className="box_img"
                                style={{ backgroundImage: `url(${cat.image})` }}
                            ></div>
                            {/* Deep-link to Shop page with this category pre-selected via query param.
                                encodeURIComponent handles category names with commas and ampersands. */}
                            <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="btn btn-outline-dark">
                                See more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Section 3: Featured Products ─────────────────────────────────── */}
            <Container className="py-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <Row>
                    {/* Each ProductCard handles its own add-to-cart button and cart count badge */}
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
