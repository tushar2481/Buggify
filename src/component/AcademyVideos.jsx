import React from "react";
import './AcademyVideos.css';
import ReactPlayer from 'react-player';




const AcademyVideos = () => {
    const video = [
        { title: 'Learn with Remonsec: How to approach sensitive information disclosure.', url: 'https://youtu.be/ug7FzoByLFc' },
        { title: 'Frans Rosén Keynote at BSides Ahmedabad', url: 'https://youtu.be/LmTzIKk8K4A' },
        { title: 'Stok’s BSides Ahmedabad Talk on Buggify for Security Researchers', url: 'https://youtu.be/8QlWyOPVEak' },
        { title: 'kavisha Seth Talks About Amazon Cognito (Mis)Configurations', url: 'https://youtu.be/8QlWyOPVEak' },
        { title: 'Farah Hawa’s Bug Bounty Journey', url: 'https://youtu.be/0EyVb0x-oJU' },
    ];

    return (
        <>
            <div className="academy-videos">

                <h1 className="academy-videos-section1-h">Community Videos</h1>


                <div className="academy-videos-div" >
                    {video.map((video) => (
                        <center>
                            <div key={video.url} className="academy-videos-vi" >
                                <h2 className="academy-videos-h">{video.title}</h2>
                                <ReactPlayer url={video.url} width="100%" height="100%" />
                            </div>
                        </center>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AcademyVideos;