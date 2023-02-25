import React, { useState } from "react";
import './signin.css';
import './Login.css';
// import { Form, Input, Label, Dropdown, Checkbox, Button } from "semantic-ui-react";

const SignInForm = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [country, setCountry] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    var data = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        companyName: companyName,
        position: position,
        country: country,
        acceptedTerms: acceptedTerms
    }
    const jsonData = JSON.stringify(data);
    // const countries = [
    //     { key: "af", value: "af", text: "Afghanistan" },
    //     { key: "ax", value: "ax", text: "Aland Islands" },
    //     { key: "al", value: "al", text: "Albania" },
    //     // ... more countries here
    // ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password==confirmPassword){
            try{
                alert(typeof(jsonData));
                const response = await fetch(`http://127.0.0.1:8000/business`, {
                    method: 'POST',
                    mode: 'no-cors',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: jsonData
                     });
                console.log(response.json());
            } catch (error) {
                    console.log(error);
                  }
        };
    };

    const handleAcceptedTerms = () => {
        setAcceptedTerms(!acceptedTerms);
    };
    return (
        <div className="signin">

            <form className="login-form">
                <h2 style={{ textAlign: "center" }} className="signin-h">Sign In</h2>
                <div>
                    <label className="signin-label">User Name*</label>
                    <input className="signin-input" type="text" name="userName" value={username} onChange={(event) => setUserName(event.target.value)} required/>
                </div>
                <div>
                    <label className="signin-label">Email*</label>
                    <input className="signin-input" type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                </div>

                <div>
                    <label className="signin-label">Password*</label>
                    <input className="signin-input" type="text" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                </div>
                <div>
                    <label className="signin-label">Confirm Password*</label>
                    <input className="signin-input" type="text" name="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required/>
                </div>
                <div>
                    <label className="signin-label">Company Name</label>
                    <input className="signin-input" type="text" name="companyName" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                </div>
                <div>
                    <label className="signin-label">Position</label>
                    <input className="signin-input" type="text" name="position" value={position} onChange={(event) => setPosition(event.target.value)} />
                </div>
                <div>
                    <label className="signin-label">Country</label>
                    <input className="signin-input" type="text" name="country" value={country} onChange={(event) => setCountry(event.target.value)} />
                </div>
                <div>
                    <input type="checkbox" id="acceptedTerms" className="signin-checkbox" checked={acceptedTerms} onChange={handleAcceptedTerms}/>
                    <label className="signin-checkbox-label">By Countinuing you agree to Buggify's <a href="#">Terms and Condition</a> and <a href="#">Privacy Policy</a></label>
                </div>
                <div className="button_ani signin-button"  onClick={handleSubmit}>
                    <button type="submit" className="button2">Sign In</button>
                </div>
                <p className="signin-p">
                    Already have an account? <a href="/login">Login Here</a>
                </p>
            </form>


        </div>
    );
};

export default SignInForm;

