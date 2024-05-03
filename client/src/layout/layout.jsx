import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cart from "../components/shop/cart";

const Layout = ({ children, isCartOpen, toggleCart, cartItems, decreaseItem, increaseItem }) => {
    return (
        <div>
            <div className="mb-[116px]">
                <Navbar isCartOpen={isCartOpen} toggleCart={toggleCart} />
            </div>
            {children}
            <Cart cartItems={cartItems} isCartOpen={isCartOpen} toggleCart={toggleCart} decreaseItem={decreaseItem} increaseItem={increaseItem} />
            <Footer />
        </div>
    );
};

export default Layout;
