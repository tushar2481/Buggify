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
        { title: 'Get Started with Hackacdemy', component: <AcademyGetStarted /> },
        { title: 'Courses', component: <AcademyCourses /> },
        { title: 'Announcement', component: <AcademyAnnouncement /> },
        { title: 'Videos', component: <AcademyVideos /> },
        { title: 'Blogs', component: <AcademyBlogs /> },
        { title: 'Discord', component: <AcademyDiscord /> },
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
                                    href={link.title}
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

                </nav>
            </div>
            <div>{content}</div>

        </>
    );
}


export default Academy;