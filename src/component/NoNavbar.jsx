import React from 'react';
import { useNavigate } from 'react-router-dom';


function NoNavbar() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/')
    }

    return (
        <>
            <div style={{ backgroundColor: "#0b0b0b" }}>
                <h1 style={{
                    color: "#04ff69",
                    paddingTop: "30px",
                    marginLeft: "10rem",
                    fontSize: "20px",
                }}
                    onClick={gotoHome}
                >
                    Buggify
                </h1></div>
        </>

    );
}

export default NoNavbar;