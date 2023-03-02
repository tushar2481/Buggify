import React, { useState } from "react";
import Cookies from "js-cookie";
import "./ForgotPassword.css";

const ConfirmOTP = () => {
    const [otp, setOtp] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp != '') {
            const url = 'localhost:3000/conf_otp';
            const data = { otp: otp }
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const resdata = await response.json()
            if(resdata.buss_id != ''){
                Cookies.set('buss_id', `${resdata.buss_id}`, { expires: 1, path: '/' });
                Cookies.set('token', `${resdata.token}`, { expires: 1, path: '/' });
                window.location.href = '/SetNewPassword';
            }else{
                if (resdata.rsrc_id != '') {
                    Cookies.set('rsrc_id', `${resdata.buss_id}`, { expires: 1, path: '/' });
                    Cookies.set('token', `${resdata.token}`, { expires: 1, path: '/' });
                    window.location.href = '/SetNewPassword';
                } else {
                    alert(resdata.note);
                }
            }
        } else {
            alert('Please Enter Username or Email Id');
        }
    }

    return (
        <div className="forgot">

            <h2 className="forgot-h ">OTP</h2>
            <form>
                {/* <div>
                    <label htmlFor="email-or-username" className="forgot-label">Enter Email Id or Username</label>
                    <input type="text" id="email-or-username" className="forgot-input" />
                </div> */}
                <div>
                    <p className="forgot-otp-p">OTP is send to your  Registered Email.</p>
                </div>
                <div>
                    <label className="forgot-label" htmlFor="otp">Enter OTP</label>
                    <input className="forgot-input" type="text" name="otp" value={otp} onChange={(event) => setOtp(event.target.value)} required />
                </div>

                <div className="forgot-button-div button_ani" onClick={handleSubmit}>
                    <button type="submit" className="button2">Confirm OTP</button>
                </div>
            </form>

        </div>
    );
};

export default ConfirmOTP;
