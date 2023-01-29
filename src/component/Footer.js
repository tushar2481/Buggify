import React from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const Footer = () => {
    return (
        <>

            <div className="footer" id="footer">
                <div className="logo">
                    <h2>Buggify</h2>
                </div>
                <div className="footer-link">
                    <ul>
                        <li className="l1">
                            <h4>Bussiness</h4>
                            <li><a href="#">Penetration testing</a></li>

                            <li style={{ textIndent: " 10px" }}><a href="#">Private red teaming</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">Web application pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">API pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">Mobile App Pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">Network Pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">Cloud Pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">IoT Pentesting</a></li>
                            <li style={{ textIndent: " 10px" }}><a href="#">Hardware Pentesting</a></li>


                            <li><a href="#">Bug bounty Program</a></li>
                            <li><a href="#">Attack surface management</a></li>
                            <li><a href="#">Vulnerability Disclosure</a></li>
                        </li>
                        <li className="l1">
                            <h4>Researchers</h4>
                            <li><a href="#">Bug Bounty Programs</a></li>
                            <li><a href="#">Researcher Docs</a></li>
                            <li><a href="#">Latest Collabarations</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Tools</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Leaderboard</a></li>

                        </li>
                        <li className="l1">
                            <h4>Academy</h4>
                            <li><a href="#">Start Hacking</a></li>
                            <li><a href="#">Certifications</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Webinars</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">FAQs</a></li>

                        </li>
                        <li className="l1">
                            <h4>About</h4>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Leardership</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Customer</a></li>
                            <li><a href="#">Press Release</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Why Us</a></li>
                            <li><a href="#">Contact Us</a></li>

                        </li>
                    </ul>

                </div>
                <hr style={
                    {
                        marginTop: "3rem",
                        width: " 90%",
                        marginLeft: "calc(5% )"
                    }
                }></hr>

                <div className="footer-policy">
                    <div className="policy-list">
                        <ul>
                            <li><a href="#">Copyright@2022 Buggify</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Private Policy</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                            <li><a href="#">Data Protection Regukation</a></li>
                        </ul>
                    </div>
                    <div className="social-list">
                        <ul>
                            <li><a href="#">
                                <BsTwitter className="twitter" /></a>
                            </li>
                            <li><a href="#">
                                <BsInstagram className="instagram" /></a>
                            </li>
                            <li><a href="#">
                                <BsLinkedin className="linkedin" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;