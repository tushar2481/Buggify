import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Researchers</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Academy</a></li>
                    </ul>
                    <div className="try-btn">
                        <button>Try Buggify</button>

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

            {/* <section className="section">
                <h1>Asia's No.1 bug bounty Platform & cyber Security Academy</h1>

                <br /><br /><br /><br /><br />

            </section> */}
        </>
    )
}

export default Navbar;