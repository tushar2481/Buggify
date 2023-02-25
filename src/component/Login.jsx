import React, { useState } from "react";
import './Login.css';


const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
            rememberMe: rememberMe
        }
        // if (!isValidUser(username)) {
        //   alert('Unsupported Character Entered in Username');
        //   return;
        // }
        fetch(`http://127.0.0.1:8000/business/${username}`, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      };
    //   const isValidUser = (username) => {
    //     const userRegex = /^[a-zA-Z0-9]+$/;
    //     return userRegex.test(username);
    //   };
      const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
      };
    return (
        <div className="login">

            <h2 className="login-h">Login</h2>
            <form className="login-form">
                <div className="login-username">
                <label htmlFor="username" className="login-label">Username:</label>
                <input type="text" id="username" className="login-form-input" value={username} onChange={(e) => setUserName(e.target.value)} required/>
                    {/* <label htmlFor="username" className="login-label">Username:</label>
                    <input type="text" id="username" className="login-form-input" /> */}
                </div>
                <div className="login-username">
                    <label htmlFor="password" className="login-label">Password:</label>
                    <input type="password" id="password" className="login-form-input" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div >
                    {/* <input type="checkbox" id="remember-me" className="login-checkbox" />
                    <label htmlFor="remember-me" className="login-checkbox-label">Remember me for a week</label> */}
                    <input type="checkbox" id="rememberMe" className="login-checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
                    <label htmlFor="rememberMe" className="login-checkbox-label">Remember me</label>
                </div>
                <div className="button_ani login-button-div" onClick={handleSubmit}>
                    <button type="submit" className="login-button button2">Login</button>
                </div>
            </form>
            <p className="login-p">
                Don't have a account? <a href="/Signup" style={{ color: "#04ff69" }}>Create an account</a>
            </p>
            <p className="login-forgot-password">
                <a href="/forgot" style={{ color: "#04ff69" }}>Forgot Password</a>
            </p>

        </div>
    );
};

export default LoginForm;