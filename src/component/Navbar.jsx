import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";


function MyList() {
	const [navActiveIndex, setNavActiveIndex] = useState(0);
	const items = [
		{ label: "Home", link: "/" },
		{ label: "Company", link: "/company" },
		{ label: "Researchers", link: "/researcher" },
		{ label: "Programs", link: "/program" },
		{ label: "Academy", link: "/academy" },
	];
	const handleNavClick = (index) => {
		setNavActiveIndex(index);
	};
	console.log("Active index: ", navActiveIndex);
	return (
		<ul>
			{items.map((item, index) => (
				<li
					key={index}
					onClick={() => handleNavClick(index)}
					className={navActiveIndex === index ? "active" : ""}
				>
					<a
						href={item.link}
						style={{
							color: index === navActiveIndex ? "#ffffff" : "#a7a7a7",
						}}
					>
						{item.label}
					</a>
				</li>
			))}
		</ul>
	);
}




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
					<MyList />

					<div className="button_ani try-btn">


						<button className="btn">Try Buggify</button>

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
