/**
 * Cart.jsx
 *
 * Shopping cart page — shows all items the user has added, allows quantity
 * adjustments, and provides a simulated checkout flow.
 *
 * Layout:
 *  - When the cart has items: a responsive table with product image, name,
 *    unit price, a quantity stepper (+/− buttons plus a direct number input),
 *    and a row total.  Below the table: subtotal and action buttons.
 *  - When the cart is empty: an info alert with a "Go Shopping" link.
 *
 * All cart operations (add, remove, update, clear) come from ShopContext.
 * The products array is also pulled from context so that the table can look
 * up each product's name, image, and price by its ID.
 *
 * Checkout is currently mocked with an alert + clearCart() + redirect to Home.
 * A real implementation would integrate with a payment gateway here.
 */

import React, { useContext } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

/**
 * Cart
 *
 * Reads cart state from context — no local state needed since all mutations
 * are handled by the context handlers.
 */
const Cart = () => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        clearCart,
        products
    } = useContext(ShopContext);

    // Pre-compute the subtotal once so we can use it in both the conditional
    // render check and the display without calling the function twice
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    /**
     * handleCheckout
     * Simulates a successful checkout: shows a confirmation alert, empties
     * the cart via context, then navigates the user back to the home page.
     *
     * TODO: Replace with actual payment processing (Stripe, PayPal, etc.)
     */
    const handleCheckout = () => {
        alert('Checkout Successful! Thank you for your purchase.');
        clearCart();   // wipe the cart state (and localStorage) immediately
        navigate('/'); // send user back to the home page
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Your Cart Items</h1>

            {/* Conditionally render the table or the empty-cart alert */}
            {totalAmount > 0 ? (
                <>
                    {/* `responsive` adds a horizontal scrollbar on small screens */}
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterate over ALL products, but only render rows for items
                                actually in the cart. This avoids having to maintain a
                                separate filtered array and keeps the logic simple. */}
                            {products.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return (
                                        <tr key={product.id}>
                                            {/* Product thumbnail + name in one cell */}
                                            <td className="d-flex align-items-center">
                                                <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                                                {product.name}
                                            </td>

                                            <td>${product.price}</td>

                                            {/* Quantity stepper: − button, direct text input, + button */}
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    {/* Decrement — removes the item entirely when quantity reaches 0 */}
                                                    <Button variant="outline-dark" size="sm" onClick={() => removeFromCart(product.id)}>-</Button>
                                                    {/* Direct input: lets users type an exact quantity.
                                                        Entering 0 removes the product from the cart. */}
                                                    <input
                                                        value={cartItems[product.id]}
                                                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                                                        style={{ width: '40px', textAlign: 'center', margin: '0 5px' }}
                                                    />
                                                    {/* Increment — calls addToCart which bumps quantity by 1 */}
                                                    <Button variant="outline-dark" size="sm" onClick={() => addToCart(product.id)}>+</Button>
                                                </div>
                                            </td>

                                            {/* Row total: unit price × quantity, formatted to 2 decimal places */}
                                            <td>${(product.price * cartItems[product.id]).toFixed(2)}</td>
                                        </tr>
                                    )
                                }
                                // Return nothing for products not in the cart
                            })}
                        </tbody>
                    </Table>

                    {/* Summary and action buttons — right-aligned */}
                    <div className="text-end">
                        <h3>Subtotal: ${totalAmount.toFixed(2)}</h3>
                        {/* Go back to shopping without losing cart contents */}
                        <Button variant="secondary" className="me-2" onClick={() => navigate('/shop')}>Continue Shopping</Button>
                        {/* Proceed to (simulated) checkout */}
                        <Button variant="success" onClick={handleCheckout}>Checkout</Button>
                    </div>
                </>
            ) : (
                /* Empty cart state — guide the user to the shop */
                <Alert variant="info" className="text-center">
                    Your cart is empty. <Button variant="link" onClick={() => navigate('/shop')}>Go Shopping</Button>
                </Alert>
            )}
        </Container>
    );
};

export default Cart;
