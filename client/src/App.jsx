import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/home';
import Shop from './pages/shop';
import PageNotFound from './pages/pageNotFound';
import Checkout from './pages/checkout';
import Login from './pages/login';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item does not exist in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseItem = (item) => {
    // Decrease the quantity of the item in the cart
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        // Decrease the quantity by 1, but ensure it doesn't go below 0
        cartItem.quantity = Math.max(cartItem.quantity - 1, 0);
      }
      return cartItem;
    });
  
    // Filter out items with quantity greater than 0
    const filteredCartItems = updatedCartItems.filter(cartItem => cartItem.quantity > 0);
  
    setCartItems(filteredCartItems);
  };

  const increaseItem = (item) => {
    // Increase the quantity of the item in the cart
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        // Increase the quantity by 1
        cartItem.quantity += 1;
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <Layout isCartOpen={isCartOpen} toggleCart={toggleCart} cartItems={cartItems} decreaseItem={decreaseItem} increaseItem={increaseItem}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
