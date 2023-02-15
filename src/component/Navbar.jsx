import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	// const [showPage, setShowPage] = useState(false);


	const toLogin = () => {
		let url = window.location.href;
		alert(url);
		let toRed = url + '/Login';
		window.location.href = toRed;
	}


	const [activeIndex, setActiveIndex] = useState(' ');




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
						<li >
							<a href="/company" className={activeIndex ? "link" : "Link"}>Company</a>
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


					<div className="button_ani try-btn">

						<button type="button" className="btn" onClick={toLogin}><a href="/Login" style={{ color: "#000000" }}>Try Buggify </a></button>

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
