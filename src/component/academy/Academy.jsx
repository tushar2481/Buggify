import React, { useState, useEffect } from "react";
import './Academy.css';
import AcademyGetStarted from "./AcademyGetStarted";
import AcademyAnnouncement from "./AcademyAnnouncement";
import AcademyCourses from "./AcademyCourses";
import AcademyVideos from "./AcademyVideos";
import AcademyBlogs from "./AcademyBlogs";
import AcademyDiscord from "./AcademyDiscord";

const Academy = () => {
    const [activeLink, setActiveLink] = useState('');
    const [content, setContent] = useState(null);

    const links = [
        { title: 'Get Started with Hackacdemy', component: <AcademyGetStarted />, linkto: "AcademyGetStarted", },
        { title: 'Courses', component: <AcademyCourses />, linkto: "AcademyCourses", },
        { title: 'Announcement', component: <AcademyAnnouncement />, linkto: "academy-announcement", },
        { title: 'Videos', component: <AcademyVideos />, linkto: "AcademyVideos", },
        { title: 'Blogs', component: <AcademyBlogs />, linkto: "AcademyBlogs", },
        { title: 'Discord', component: <AcademyDiscord />, linkto: "AcademyDiscord" },
    ];

    const handleClick = (link) => {
        setActiveLink(link.title);
        setContent(link.component);
    };

    useEffect(() => {
        const title = decodeURI(window.location.pathname.replace('/academy/', ''));
        const link = links.find((link) => link.title === title) || links[0];
        setActiveLink(link.title);
        setContent(link.component);
    }, []);

    return (
        <>
            <div className="a1" style={{ backgroundColor: "#0b0b0b" }}>
                <nav className="academy-na">
                    <ul className="academy-nav-ul">
                        {links.map((link) => (
                            <li key={link.title} className="academy-nav-li">
                                <a
                                    href="#"
                                    style={{
                                        color: activeLink === link.title ? '#878787' : '#000000',
                                    }}
                                    onClick={() => handleClick(link)}

                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div>{content}</div>
                </nav>
            </div>


        </>
    );
}


export default Academy;