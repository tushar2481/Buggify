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
					className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
				>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/company">Company</a>
						</li>
						<li>
							<a href="/researcher">Researchers</a>
						</li>
						<li>
							<a href="/program">Programs</a>
						</li>
						<li>
							<a href="/academy">Academy</a>
						</li>
					</ul>
					<div className="try-btn">
						<button className="button">Try-Buggify</button>
					</div>
				</div>

				<div className="social-media">
					<div className="hamburger-menu">
						<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<BsList />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
