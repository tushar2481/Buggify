import React, { useState } from "react";
import Cookies from "js-cookie";
import "./ForgotPassword.css";

const ConfirmOTP = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    if (newPassword == confirmPassword) {
            const url = `http://127.0.0.1:5173/newpassupdate`;
            let final_cookie, data;
            const cookie1 = Cookies.get('buss_id');
            if(cookie1){
                final_cookie = cookie1;
                data = { password: newPassword, buss_id: final_cookie }
            }else{
                const cookie2 = Cookies.get('rsrc_id');
                if(cookie2){
                    final_cookie = cookie2
                    data = { password: newPassword, rsrc_id: final_cookie }
                }
            }
            if(final_cookie){
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  })
                  console.log(response);
        } else {
            alert('Please Enter Username or Email Id');
        }
    } else {
        alert('Something went wrong')
    }
    }

    return (
        <div className="forgot">

            <h2 className="forgot-h ">Setup New Password</h2>
            <form>
                {/* <div>
                    <label htmlFor="email-or-username" className="forgot-label">Enter Email Id or Username</label>
                    <input type="text" id="email-or-username" className="forgot-input" />
                </div> */}

                <div>
                    <label className="forgot-label" htmlFor="newPassword">Set New Password</label>
                    <input className="forgot-input" type="text" name="newPassword" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />
                </div>
                <div>
                    <label className="forgot-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="forgot-input" type="text" name="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                </div>

                <div className="forgot-button-div button_ani" onClick={handleSubmit}>
                    <button type="submit" className="button2">Create New Password</button>
                </div>
            </form>

        </div>
    );
};

export default ConfirmOTP;
