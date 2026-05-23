/**
 * ProductCard.jsx
 *
 * Reusable card component that displays a single product.
 *
 * Rendered inside a Bootstrap <Row> grid in the Shop and Home pages.
 * The responsive col-* classes on the wrapping div control how many cards
 * appear per row at each breakpoint (1 → 2 → 3 → 4 columns).
 *
 * Features:
 *  - Product image displayed as a CSS background (allows object-fit cropping
 *    via the .box1_img class defined in index.css)
 *  - Price formatted to 2 decimal places
 *  - "Add to Cart" button that increments the cart count via ShopContext
 *  - Live quantity display in the button label (e.g. "Add to Cart (3)")
 *    so the user always knows how many of this item are already in their cart
 */

import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';

/**
 * ProductCard
 *
 * @param {Object} props
 * @param {Object} props.product - A single product object from the products array
 * @param {string} props.product.id       - Unique product identifier
 * @param {string} props.product.name     - Display name
 * @param {number} props.product.price    - Price in USD
 * @param {string} props.product.image    - Relative path to the product image
 */
const ProductCard = ({ product }) => {
    const { addToCart, cartItems } = useContext(ShopContext);

    // How many of this product are already in the cart (undefined if none)
    const cartItemAmount = cartItems[product.id];

    return (
        // Responsive column widths — fills full width on xs, 2-up on sm, 3-up on md, 4-up on lg+
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="h-100 box1">
                {/* CSS background-image approach lets us control crop/zoom via .box1_img styles */}
                <div className="box1_img" style={{ backgroundImage: `url(${product.image})` }}></div>

                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {/* toFixed(2) ensures prices like 30 display as $30.00, not $30 */}
                        ${product.price.toFixed(2)}
                    </Card.Text>

                    {/* mt-auto pushes the button to the bottom of the card regardless of title length */}
                    <div className="mt-auto">
                        <Button variant="outline-dark" onClick={() => addToCart(product.id)} className="w-100">
                            {/* Show the current cart quantity in parentheses if > 0 */}
                            Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
