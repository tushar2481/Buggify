import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";

const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	// const [activeIndex, setActiveIndex] = useState(0);

	// const handleClick = (index) => {
	// 	setActiveIndex(index);
	// };

	const [isHomeLinkOpen, setIsHomeLinkOpen] = useState(false);
	const [isCompanyLinkOpen, setIsCompanyLinkOpen] = useState(false);
	const [isResearcherLinkOpen, setIsResearcherLinkOpen] = useState(false);
	const [isProgramLinkOpen, setIsProgramLinkOpen] = useState(false);
	const [isAcademyLinkOpen, setIsAcademyLinkOpen] = useState(false);

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
						<li
							className={isHomeLinkOpen ? "active" : "menu-linnk"}
							onClick={() => setIsHomeLinkOpen(!isHomeLinkOpen)}
						>
							<a href="/">Home</a>
						</li>
						<li
							className={isCompanyLinkOpen ? "menu-link-a" : "menu-link-active"}
							onClick={() => setIsCompanyLinkOpen(!isCompanyLinkOpen)}
						>
							<a href="/company">Company</a>
						</li>
						<li>
							<a
								href="/researcher"
								className={isResearcherLinkOpen ? "menu-link-a" : "menu-link-active"}
								onClick={() => setIsResearcherLinkOpen(!isResearcherLinkOpen)}
							>
								Researchers
							</a>
						</li>
						<li>
							<a
								href="/program"
								className={setIsProgramLinkOpen ? "menu-link-a" : "menu-link-active"}
								onClick={() => setIsProgramLinkOpen(!isProgramLinkOpen)}
							>
								Programs
							</a>
						</li>
						<li onClick={() => setIsAcademyLinkOpen(!isAcademyLinkOpen)}>
							<a
								href="/academy"
								className={isAcademyLinkOpen ? "active" : "menu-link-a"}
							>
								Academy
							</a>
						</li>
					</ul>
					

					<div class="button_ani try-btn">
					<button type="button" className="btn">Try Buggify</button>
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
