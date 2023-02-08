import React, { useState } from "react";
import "./Company.css";
import CompanyImg1 from "./image/Company-section-1.png";
import CompanyImg2 from "./image/Company-section-3-1.png";
import CompanyImg3 from "./image/Company-section-3-2.png";
import CompanyImg4 from "./image/Company-section-3-3.png";
import CompanyImg5 from "./image/Company-section-3-4.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Data = [
	{ image: "image1", heading: "Heading 1", anchor: "Learn More" },
	{ image: "image2", heading: "Web Application Pentest", anchor: "Learn More" },
	{
		image: "image3",
		heading: "Active Directory Pentest",
		anchor: "Learn More",
	},
	{ image: "image4", heading: "Heading 4", anchor: "Learn More" },
];

function Company() {
	const [div2Index, setDiv2Index] = useState(1);
	const [div3Index, setDiv3Index] = useState(2);

	const handleLeftIconClick = () => {
		setDiv2Index(div2Index === 0 ? Data.length - 1 : div2Index - 1);
		setDiv3Index(div3Index);
	};

	const handleRightIconClick = () => {
		setDiv2Index(div2Index);
		setDiv3Index(div3Index === Data.length - 1 ? 0 : div3Index + 1);
	};
	return (
		<>
			<div className="company">
				<div className="section-1">
					<div className="part-1">
						<h1 className="section-1-part-1-h">
							<span style={{ color: "#04FF69" }}>Penetration Testing</span> for an{" "}
							<br />
							Organization.
						</h1>
						<p className="section-1-part-1-p">
							Penetration Testing as a Service from Buggify Covers Various Aspects of
							Data Protection, Regulation & Governance.
						</p>
						<div>
							<button className="button section-1-part-1-btn ">Private Program</button>
							<button className="button2 section-1-part-1-btn2 ">
								Public Program
							</button>
						</div>
					</div>
					<div className="part-2">
						<img src={CompanyImg1} className="section-1-part-2-img"></img>
					</div>
				</div>

				<div className="section-2">
					<h2 className="section-2-h h3">Why Penetration Testing as a Service?</h2>
					<div className="section-2-div">
						<div className="section-2-div1">
							<h3 className="section-2-div-h">High in Transparancy</h3>
							<p className="section-2-div-p">
								Vulnerability Disclosure Reports are Directly Provided to Organization
								without 3rd Party engagement of Other Organization. Every Reports will
								be provided Personal Triagger. Reports can be tracked through Business
								Dashboard. Transparent Process Between Pentester & Organization will be
								maintained.
							</p>
						</div>
						<div className="section-2-div2">
							<h3 className="section-2-div-h">Flexible & Impactful</h3>
							<p className="section-2-div-p">
								Red Team Engagement Provides Flexible Testing according to
								Organization’s Needs. Vulnerability Disclosure Program uses Public
								Sourcing to Patch Impactful Bugs in Systems that Reduces Potential
								Attack Vectors. Meet compliance goals (PCI, NIST, ISO 27001) and surpass
								them by incentivizing pentesters for results.
							</p>
						</div>
						<div className="section-2-div3">
							<h3 className="section-2-div-h">Easy Scaling & More Speed</h3>
							<p className="section-2-div-p">
								Organization can easily scale scope of Assets for Increase or Decrease
								Testing based on Priorities. Customized Testing Methodologies of Testing
								can be Applied. Red Team Engagement & Vulnerability Disclosure Program
								provides Speedy Fixing of Vulnerable Attack Surface.
							</p>
						</div>
					</div>
				</div>

				<div className="section-3">
					<div className="section-3-div">
						<div className="section-3-div1">
							<div className="section-3-div-image img-1">
								<img src={CompanyImg2} className="section-3-div-img"></img>
							</div>
							<div className="section-3-div-content">
								<h3 className="section-3-div-h1">Business Dashboard</h3>
								<h2 className="section-3-div-h2">
									<span style={{ color: "#04ff69" }}>Dashboard</span> to handle things in
									easy way as they happen.
								</h2>
								<p className="section-3-div-p">
									Every Submitted Bugs can be Prioritize according to their severity.
									Personal Pentest Reports can be easily tracked. It is Specifically
									Designed to Monitor Pentest 24/7. After Completion of Pentest, You can
									download Pentest Report directly from Dashboard. (See Sample Report)
								</p>
							</div>
						</div>
						<div className="section-3-div2">
							<div className="section-3-div-content content-2">
								<h3 className="section-3-div-h1">
									Choose Pentesters According to Your Needs
								</h3>
								<h2 className="section-3-div-h2">
									<span style={{ color: "#04ff69" }}>Highly Qualified</span> Testers for
									Pentesting Your Systems.
								</h2>
								<p className="section-3-div-p">
									Each Unique Systems Requires Testers According to Masters in Specific
									Area of Pentesting. Buggify provides team or individuals that are
									Experienced and can be chosen as a Team. Teams Can be Customized
									According to Changing Needs. Look at Our Top Hackers From Globe at
									Leaderboard
								</p>
							</div>
							<div className="section-3-div-image img-2">
								<img src={CompanyImg3} className="section-3-div-img"></img>
							</div>
						</div>
						<div className="section-3-div3">
							<div className="section-3-div-image img-1">
								<img src={CompanyImg4} className="section-3-div-img"></img>
							</div>
							<div className="section-3-div-content">
								<h3 className="section-3-div-h1">Competitive Testing</h3>
								<h2 className="section-3-div-h2">
									Hackers Earn Different{" "}
									<span style={{ color: "#04ff69" }}>Skill Badges</span> According to
									Their Levels
								</h2>
								<p className="section-3-div-p">
									Different Area of Testing Consists of Various Badges like Web Pwnner,
									Network Nugget, IoT Crackers, Hardware Hardcore, Malware Master, etc.
									Using this Best Pentesters According to Your Needs can be found. Even
									Level Badges are there for OWASP, SANS, NIST Standards, etc.
								</p>
							</div>
						</div>
						<div className="section-3-div4  ">
							<div className="section-3-div-content content-2">
								<h3 className="section-3-div-h1">Continuous Analysis</h3>
								<h2 className="section-3-div-h2">
									Organization Can <span style={{ color: "#04ff69" }}>Monitor</span>For
									Security Reports & Submissions.
								</h2>
								<p className="section-3-div-p">
									Bug Report Submissions can be tracked and continuously monitored for
									How many Bugs Found Over Periods. Re-Testing Like Policies can be
									Applied through Sustainable Programs. It Can be Used to Reduce Risks.
									Old Reports can be Re-Open to Avoid Duplicates.
								</p>
							</div>
							<div className="section-3-div-image img-2">
								<img src={CompanyImg5} className="section-3-div-img"></img>
							</div>
						</div>
					</div>
				</div>

				<div className="section-4">
					<h2 className="section-4-h">Our Products</h2>
					<h1 className="section-4-h2">
						Optimized Products for Various Cyber Security Requirements in{" "}
						<span style={{ color: "#04ff69" }}>Race of Technology</span>
					</h1>
					<div className="section-4-div">
						<span className="section-4-div-leftArrow">
							{" "}
							<BsFillArrowLeftCircleFill
								className="arrow-left-icon"
								onClick={handleLeftIconClick}
							/>
						</span>
						<div className="section-4-div1">
							<img src={div2Index.image} className="section-4-div-img" />
							<h3 className="section-4-div-h">{div2Index.heading}</h3>
							<a href={div2Index.anchor} className="section-4-div-a">
								{div2Index.anchor}
							</a>
						</div>
						<div className="section-4-div2">
							<img src={div3Index.image} className="section-4-div-img" />
							<h3 className="section-4-div-h">{div3Index.heading}</h3>
							<a href={div3Index.anchor} className="section-4-div-a">
								{div3Index.anchor}
							</a>
						</div>
						<div className="section-4-div-rightArrow">
							<BsFillArrowRightCircleFill
								className="arrow-right-icon"
								onClick={handleRightIconClick}
							/>
						</div>
					</div>
				</div>

				{/* Section-5 */}

				{/* Section-6 */}
			</div>
		</>
	);
}

export default Company;
