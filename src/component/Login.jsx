import React from "react";
import './Login.css';

const LoginForm = () => {
    return (
        <div className="login">
            <center>
                <h2 className="login-h">Login</h2>
                <form className="login-form">
                    <div className="login-username">
                        <label htmlFor="username" className="login-label">Username:</label>
                        <input type="text" id="username" className="login-form-input" />
                    </div>
                    <div>
                        <label htmlFor="password" className="login-label">Password:</label>
                        <input type="password" id="password" className="login-form-input" />
                    </div>
                    <div>
                        <input type="checkbox" id="remember-me" className="login-checkbox" />
                        <label htmlFor="remember-me" className="login-checkbox-label">Remember me for a week</label>
                    </div>
                    <div className="button_ani login-button-div">
                        <button type="submit" className="login-button button2">Login</button>
                    </div>
                </form>
                <p className="login-p">
                    Don't have a account? <a href="/Signup" style={{ color: "#04ff69" }}>Create an account</a>
                </p>
                <p className="login-forgot-password">
                    <a href="/forgot" style={{ color: "#04ff69" }}>Forgot Password</a>
                </p>
            </center>
        </div>
    );
};

export default LoginForm;