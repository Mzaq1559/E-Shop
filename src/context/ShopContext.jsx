import React, { createContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });

    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : {};
    });

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const addProduct = (product) => {
        setProducts((prev) => [...prev, product]);
    };

    const removeProduct = (id) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
                if (newCart[itemId] === 0) delete newCart[itemId];
            }
            return newCart;
        });
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newAmount === 0) {
                delete newCart[itemId];
            } else {
                newCart[itemId] = newAmount;
            }
            return newCart;
        });
    };

    const clearCart = () => {
        setCartItems({});
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find product info for this item
                let itemInfo = products.find((product) => product.id === item);
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        clearCart,
        getTotalCartAmount,
        getTotalCartAmount,
        getTotalCartItems,
        user,
        login,
        logout,
        products,
        addProduct,
        removeProduct
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
