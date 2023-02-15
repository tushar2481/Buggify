import React from "react";
import './AcademyAnnouncement.css';

const AcademyAnnouncement = () => {
    return (
        <>

            <div className="academy-announcement">

                <h1 className="academy-announcement-h">
                    Announcements
                </h1>
                <center>
                    <h3 className="academy-announcement-h2">New Academy Platform Release 1.0 - April 2023 </h3>
                    <p className="academy-announcement-p">To Empower Young Minds in the field of Cyber Security, Specifically in Offensive Security. We Are Bringing Our Latest Buggify InfoSec Academy to the Community. </p>
                    <p className="academy-announcement-p">We Are going to launch Some of the finest topics that makes individuals ready for industry based on Real World Experience of Topics like Web Application Security, Mobile Application Security, API Security, Cloud Security, Penetration Testing / VAPT, Red Teaming, Hardware & IoT Security and so on... </p>
                    <p className="academy-announcement-p">Our Highly Experienced Instructors & Proctors are eagerly waiting to see you on our Academic Platform.</p>
                </center>
            </div>
        </>
    )
}

export default AcademyAnnouncement;