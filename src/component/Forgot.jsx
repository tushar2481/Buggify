import React from "react";
import "./ForgotPassword.css";

const ForgotPasswordForm = () => {
    return (
        <div className="forgot">
            <h2 className="forgot-h " >Forgot Password</h2>
            <form>
                <div>
                    <label htmlFor="email-or-username" className="forgot-label">Enter Email Id or Username:</label>
                    <input type="text" id="email-or-username" className="forgot-input" />
                </div>
                <div>
                    <p className="forgot-p">You will receive a link to create a new password via email.</p>
                </div>
                <div className="forgot-button-div button_ani">
                    <button type="submit" className="button2">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
