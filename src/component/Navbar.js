import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>Buggify</h2>
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/company'>Company</NavLink></li>
                        <li><NavLink to='/researchers'>Researchers</NavLink></li>
                        <li><NavLink to='/program'>Programs</NavLink></li>
                        <li><NavLink to='/academy'>Academy</NavLink></li>
                    </ul>
                    <div className="try-btn">
                        <button >Try-Buggify</button>

                    </div>

                </div>

                <div className="social-media">
                    <div className="hamburger-menu" >
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <BsList />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;