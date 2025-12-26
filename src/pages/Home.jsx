import React, { useContext } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { categories } from '../data/products';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const { products } = useContext(ShopContext);
    // Get first 4 products for featured section
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* Carousel */}
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

            {/* Categories */}
            <div className="shop_section">
                {categories.map((cat) => (
                    <div key={cat.id} className="box">
                        <div className="box_content">
                            <h5>{cat.name}</h5>
                            <div
                                className="box_img"
                                style={{ backgroundImage: `url(${cat.image})` }}
                            ></div>
                            <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="btn btn-outline-dark">
                                See more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Products */}
            <Container className="py-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <Row>
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
