import React from "react";
import './Homes7.css'

const homes7 = ({ videoId }) => {
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;


    return (
        <>
            <div className="section-seven">
                <hr className="section-seven-hr" />
                <h3 className="h1 section-seven-h">A Small message from our CEO for all</h3>
                <h1 className=" section-seven-h1 h">The latest in Reducing Attack Surface</h1>
                <div className="section-seven-yt">
                    <iframe
                        className="iframe"
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={youtubeEmbedUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </>
    )
}

export default homes7;