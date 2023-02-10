import React, { useState } from "react";
import './Homes8.css'
function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [country, setCountry] = useState("");

    return (
        <div className="section-eight">
            <h1 className="h section-eight-h"> Any Questions? Get in Touch with Us</h1>
            <h2 className="h1 section-eight-h2">How Can We Help You? Let Us know and we will get back to you as soon as Possible</h2>

            <form className="section-eight-form">
                <div>
                    <label className="section-eight-form-label" htmlFor="firstName">First Name:</label>
                    <input className="section-eight-form-input"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="section-eight-form-label" htmlFor="lastName">Last Name:</label>
                    <input className="section-eight-form-input"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="section-eight-form-label" htmlFor="email">Email:</label>
                    <input className="section-eight-form-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="section-eight-form-label" htmlFor="company">Company:</label>
                    <input className="section-eight-form-input"
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div>
                    <label className="section-eight-form-label" htmlFor="jobTitle">Job Title:</label>
                    <input className="section-eight-form-input"
                        type="text"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="section-eight-form-label" htmlFor="country">Country:</label>
                    <input className="section-eight-form-input"
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>


                <p className="section-eight-form-p">We will handle all information Safe according to Our Privacy Policy. If you don’t want to receive marketing mail, you can manually Turn it off from here.</p>
                <div className="button_ani  section-eight-form-button">
                    <button className="btn" >
                        Get in Touch!
                    </button>
                </div>
            </form >

        </div >
    );
}

export default Form;

