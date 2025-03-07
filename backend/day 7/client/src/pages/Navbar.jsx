import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo">MyApp</h1>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
