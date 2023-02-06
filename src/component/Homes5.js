import React, { useState } from 'react';
import './Homes5.css'
import web from './image/web.png';
import malware from './image/malware.png';
import netsec from './image/netsec.png';
import right from './image/right.png';
import left from './image/left.png';

function MyComponent() {
    const [divs, setDivs] = useState([{ heading: 'Network Security', image: './image/netsec.png' }, { heading: 'Web Application Security', image: './image/web.png' }, { heading: 'Malware Analysis & R.E.', image: './image/malware.png' },]);

    const handleLeftArrowClick = () => {
        setDivs([divs[1], divs[2], divs[0]]);
    };

    const handleRightArrowClick = () => {
        setDivs([divs[2], divs[0], divs[1]]);
    };

    const styles = {
        div: {
            backgroundColor: '#141414',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            width: '300px',
            margin: '10px',
            border: '1px solid #0ff069',
            borderRadius: '10px',
        },
        imgStyle: {
            height: '200px',
            width: '200px',
            marginLeft: 'calc(20%)',
            marginTop: '5rem',
            // marginDown: '5rem',
        },
        divHeading: {
            color: '#FFFFFF',
            fontSize: '16px',
            textAlign: 'center',
            marginTop: '5rem',
        },
    };

    return (

        <div className='section-five' >

            <h3 className="section-three-h1 h1">For Academy</h3>
            <h1 className="h section-three-h2">Learn by breaking things</h1>
            <p className="section-three-p">Buggify is willing for Students to master their career into Cyber Security Profession by providing different Security Courses from Various Area of Technologies from Web Application to Network Pentesting, Hardware & IoT Pentesting, Cloud Security Assessment to Malware Analysis and many more.</p>





            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={left}
                    alt="Left Arrow"
                    onClick={handleLeftArrowClick}
                    style={{
                        cursor: 'pointer',
                        width: '50px',
                        height: '50px',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        marginTop: '20rem',
                    }}
                />
                {divs.map((div, index) => (
                    <div key={index} style={styles.div}>
                        <h3 style={styles.divHeading}>{div.heading}</h3>
                        <img src={div.image} alt={div.heading} style={styles.imgStyle} />
                    </div>
                ))}
                <img
                    src={right}
                    alt="Right Arrow"
                    onClick={handleRightArrowClick}
                    style={{
                        cursor: 'pointer',
                        width: '50px',
                        height: '50px',
                        gridColumn: '2/3',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        marginTop: '20rem',
                    }}
                />
            </div>
        </div >
    );
}

export default MyComponent;
