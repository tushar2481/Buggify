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
    const [selectedCountry, setSelectedCountry] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const countries = [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'MX', name: 'Mexico' },
        // add more countries here
    ];

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);};

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password==confirmPassword){
            if(companyName=='' && position==''){
                const url = 'http://127.0.0.1:3000/researcher';
                    const data = {  username: username, email: email, password: password, country:selectedCountry, accepted_terms:acceptedTerms }
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
            }else{
                if(companyName!='' && position!=''){
                    const url = 'http://127.0.0.1:3000/business';
                    const data = {  username: username, email: email, password: password, company_name:companyName, position:position, country:selectedCountry, accepted_terms:acceptedTerms }
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
                }else{
                    alert('Company Name or Position Missing for Business Account');
                }
            }
        }else{
            alert(`Password and Confirm Password is not matching`);
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
                    <input className="signin-input" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                </div>
                <div>
                    <label className="signin-label">Confirm Password*</label>
                    <input className="signin-input" type="password" name="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required/>
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
                    <select className="signin-input" id="country" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.name} > {country.name}</option>
                        ))}
                    </select>
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

