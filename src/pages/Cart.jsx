import React, { useContext } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, clearCart, products } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const handleCheckout = () => {
        alert('Checkout Successful! Thank you for your purchase.');
        clearCart();
        navigate('/');
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Your Cart Items</h1>

            {totalAmount > 0 ? (
                <>
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
                            {products.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return (
                                        <tr key={product.id}>
                                            <td className="d-flex align-items-center">
                                                <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                                                {product.name}
                                            </td>
                                            <td>${product.price}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Button variant="outline-dark" size="sm" onClick={() => removeFromCart(product.id)}>-</Button>
                                                    <input
                                                        value={cartItems[product.id]}
                                                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                                                        style={{ width: '40px', textAlign: 'center', margin: '0 5px' }}
                                                    />
                                                    <Button variant="outline-dark" size="sm" onClick={() => addToCart(product.id)}>+</Button>
                                                </div>
                                            </td>
                                            <td>${(product.price * cartItems[product.id]).toFixed(2)}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </Table>
                    <div className="text-end">
                        <h3>Subtotal: ${totalAmount.toFixed(2)}</h3>
                        <Button variant="secondary" className="me-2" onClick={() => navigate('/shop')}>Continue Shopping</Button>
                        <Button variant="success" onClick={handleCheckout}>Checkout</Button>
                    </div>
                </>
            ) : (
                <Alert variant="info" className="text-center">
                    Your cart is empty. <Button variant="link" onClick={() => navigate('/shop')}>Go Shopping</Button>
                </Alert>
            )}
        </Container>
    );
};

export default Cart;
