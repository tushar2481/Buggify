import React, { useState } from "react";
import './signin.css';
import { Form, Input, Label, Dropdown, Checkbox, Button } from "semantic-ui-react";

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [country, setCountry] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);


    const countries = [
        { key: "af", value: "af", text: "Afghanistan" },
        { key: "ax", value: "ax", text: "Aland Islands" },
        { key: "al", value: "al", text: "Albania" },
        // ... more countries here
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // add code to handle form submission here
    };

    return (
        <div className="signin">
            <Form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center" }} className="signin-h">Sign In</h2>
                <Form.Field>
                    <label className="signin-label">User Name</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="userName"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="signin-label">Email</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label className="signin-label">Password</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="signin-label">Confirm Password</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="signin-label">Company Name:</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="signin-label">Position</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="position"
                        value={position}
                        onChange={(event) => setPosition(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="signin-label">Country</label>
                    <input
                        className="signin-input"
                        type="text"
                        name="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="signin-checkbox"
                        checked={acceptedTerms}
                        onChange={(event) => setAcceptedTerms(event.target.checked)}
                    />
                    <label className="signin-checkbox-label">By Countinuing you agree to Buggify's <a href="#">Terms and Condition</a> and <a href="#">Privacy Policy</a></label>
                </Form.Field>
                <div className="button_ani signin-button">
                    <Button type="submit" className="button2">Sign In</Button>
                </div>
                <p className="signin-p">
                    Already have an account? <a href="/login">Login Here</a>
                </p>
            </Form>
        </div>
    );
};

export default SignInForm;
