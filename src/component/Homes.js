import React, { useState } from 'react';
import './Homes6.css';
import { FcGoogle } from "react-icons/fc";
import { IoColorFill } from 'react-icons/io5';

const Homes6 = () => {
    const [isBusinessChecked, setIsBusinessChecked] = useState(false);
    const [isResearcherChecked, setIsResearcherChecked] = useState(false);

    const handleBusinessCheck = (event) => {
        setIsBusinessChecked(event.target.checked);
        setIsResearcherChecked(false);
    };

    const handleResearcherCheck = (event) => {
        setIsResearcherChecked(event.target.checked);
        setIsBusinessChecked(false);
    };

    return (
        <div className="section-six">
            <h3 className="h1">For Researcher</h3>
            <h1 className="h">What our users think about us? </h1>

            <div style={{ marginTop: '5rem' }}>
                <input
                    style={{ display: 'none' }}
                    type="checkbox"
                    id="business"
                    checked={isBusinessChecked}
                    onChange={handleBusinessCheck}
                />
                <label htmlFor="business" className='business-label'>Business</label>

                <input
                    style={{ display: 'none' }}
                    type="checkbox"
                    id="researcher"
                    checked={isResearcherChecked}
                    onChange={handleResearcherCheck}
                />
                <label htmlFor="researcher" className='reseacher-label'>Researcher</label>
                <hr style={{
                    border: 'none',
                    height: '1px',
                    backgroundColor: '#878787',
                    width: '70%',
                    marginLeft: 'calc(15%)',
                }} />
                {isBusinessChecked && (
                    <div className="toggled-div">
                        <div className="div1">
                            <p className='div-p'>The Flexibility of Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                        <div className="div2">
                            <p className='div-p'>The Flexibility of Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                        <div className="div3">
                            <p className='div-p'>The Flexibility of Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
                {isResearcherChecked && (
                    <div className="toggled-div">
                        <div className="div1">
                            <p className='div-p'>The Flexibility of Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                        <div className="div2">
                            <p className='div-p'>The Flexibility of Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                        <div className="div3">
                            <p className='div-p'>f Platform and Amazing Community of Security Researchers are Helping make Google Cloud a Secure & Trusted Platform</p>
                            <div className='div-icon-name'>
                                <FcGoogle className="div-icon"></FcGoogle>
                                <div className='t-d'>
                                    <h3 className='div-h1'>Phil Venables</h3>
                                    <h4 className='div-h2'>CISO, Google Cloud</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
            </div>


        </div>

    );
};

export default Homes6;
