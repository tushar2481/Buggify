import React from "react";
import './AcademyGetStarted.css';
import AcademyGet1 from "./image/AcademyGet1.png";
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AcademyGetStarted = () => {







    return (
        <>
            <div className="academy-getstart">
                <div className="academy-getstart-section1">
                    <h1 className="academy-getstart-section1-h">Learn to Hack, Hack to Earn</h1>
                    <div className="academy-getstart-section1">
                        <div className="academy-getstart-section1-div1">
                            <img src={AcademyGet1} className="academy-getstart-section1-div1-img" />
                            <div className="academy-getstart-section1-div1-p">
                                <p className="academy-getstart-section1-div1-p1">
                                    Join Our Elite Cyber Security Academy and Empower Yourself with
                                    the Skills and Knowledge to Defend Against Digital Threats
                                    and Secure the Digital World.
                                </p>
                                <p className="academy-getstart-section1-div1-p2">Discover the Cutting-Edge Tools and Methods for Defending
                                    Against Cyber Threats at Our Cyber Security Academy Website.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="academy-getstart-section2">
                        <h1 className="academy-getstart-section2-h">Our Finest Courses</h1>

                        <div className="academy-getstart-section2-slider">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src=""
                                        alt="First slide"

                                    />
                                    <Carousel.Caption>
                                        <h3 >First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Third slide&bg=20232a"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 >Third slide label</h3>
                                        <p >
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>









                        </div>



                    </div>


                </div>
            </div>
        </>
    )
}

export default AcademyGetStarted;