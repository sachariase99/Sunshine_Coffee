// Navbar.jsx
import React from "react";
import SunshineLogo from "./sunshineLogo";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ isCartOpen, toggleCart }) => {
    return (
        <nav className="bg-[#111111] h-[116px] text-white flex items-center justify-end fixed top-0 w-full z-10">
            <SunshineLogo />
            <div className="border-white border-2 px-6 mr-8 cursor-pointer">
                Europa
            </div>
            <IoCartOutline
                className="h-[62px] w-auto mr-8 cursor-pointer"
                onClick={toggleCart}
            />
            <Link to="/login"><FaRegUser className="h-[62px] w-auto mr-8 cursor-pointer" /></Link>
        </nav>
    );
};

export default Navbar;
