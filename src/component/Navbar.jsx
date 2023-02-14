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


	// var Link = require('react-router').Link
	// const [activeIndex, setActiveIndex] = useState(0);

	// const handleClick = (index) => {
	// 	setActiveIndex(index);
	// };

	// const [isHomeLinkOpen, setIsHomeLinkOpen] = useState(false);
	// const [isCompanyLinkOpen, setIsCompanyLinkOpen] = useState(false);
	// const [isResearcherLinkOpen, setIsResearcherLinkOpen] = useState(false);
	// const [isProgramLinkOpen, setIsProgramLinkOpen] = useState(false);
	// const [isAcademyLinkOpen, setIsAcademyLinkOpen] = useState(false);

	// const navigateTo = useNavigate();

	// const handleClick = () => {
	// 	navigateTo("/login");
	// };

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
							<a href="/company" >Company</a>
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
