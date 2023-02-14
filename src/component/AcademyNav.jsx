import React, { useState } from "react";


const AcademyNav = () => {
    const [activeLink, setActiveLink] = useState('Get Started');

    const links = [
        { title: 'Get Started with Hackacdemy', path: '/Academy' },
        { title: 'Courses', path: '/Academy/courses' },
        { title: 'Announcement', path: '/Academy/announcement' },
        { title: 'Videos', path: '/Academy/videos' },
        { title: 'Blogs', path: '/Academy/blogs' },
        { title: 'Discord', path: '/Academy/discord' },
    ];

    const handleClick = (title) => {
        setActiveLink(title);
    };


    return (
        <>
            <div className="acdemy-nav">

                <nav>
                    <ul>
                        {links.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={link.path}
                                    style={{
                                        color: activeLink === link.title ? '#000000' : '#878787',
                                    }}
                                    onClick={() => handleClick(link.title)}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AcademyNav;