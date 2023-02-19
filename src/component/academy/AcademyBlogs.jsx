import React from "react";
import './AcademyBlogs.css';
import HomeBlogTwitter from '../image/HomeBlogTwitter.png';
import HomeBlogUkrainian from '../image/HomeBlogUkrainian.png';
import HomeBlogRecon from '../image/HomeBlogRecon.png';
import HomeBlogFire from '../image/HomeBlogFire.png';


const AcademyBlogs = () => {
    const blog = [
        {
            id: 1,
            imgSrc: HomeBlogTwitter,
            title: "Twitter,s 400M Users Data on Sale in Darknet",
            description: "Learn about the",
            link: "/blog/the-importance-of-sleep"
        },
        {
            id: 2,
            imgSrc: HomeBlogUkrainian,
            title: "Ukrainian Govt. Infrastructure Targeted by Chinese Hackers",
            description: "Discover five tips to help you increase your ",
            link: "/blog/5-ways-to-boost-productivity"
        },
        {
            id: 3,
            imgSrc: HomeBlogRecon,
            title: "ReconJET - Reconnaisance Tool Released by Buggify",
            description: "Discover five tips to help you increase  ",
            link: "/blog/5-ways-to-boost-productivity"
        },
        {
            id: 4,
            imgSrc: HomeBlogFire,
            title: "Fire Rescue Victoria Confirms Cyber Attack",
            description: "Discover five tips to help you increase your",
            link: "/blog/5-ways-to-boost-productivity"
        },
        // ... other blog data objects
    ];
    return (
        <div className="academy-blog">
            <div >
                {blog.map((blog) => (
                    <div className="academy-blog-card" key={blog.id} >
                        <div className="academy-blog-card-body" >
                            <div className="academy-blog-card-img">
                                <img src={blog.imgSrc} alt={blog.title} className="academy-card-img" />
                            </div>
                            <div className="academy-blog-card-text">
                                <h3 className="academy-card-h">{blog.title}</h3>
                                <p className="academy-card-p">{blog.description}</p>
                            </div>
                            <div className="button_ani blog-card-button">
                                <a href={blog.link} className="btn academy-card-button">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
};


export default AcademyBlogs;