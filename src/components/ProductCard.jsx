import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[product.id];

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="h-100 box1">
                <div className="box1_img" style={{ backgroundImage: `url(${product.image})` }}></div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price.toFixed(2)}
                    </Card.Text>
                    <div className="mt-auto">
                        <Button variant="outline-dark" onClick={() => addToCart(product.id)} className="w-100">
                            Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
