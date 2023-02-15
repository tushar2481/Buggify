import React from "react";
import './AcademyDiscord.css';
import AcademyDiscord1 from '../image/AcademyDiscord1.jpg'


const AcademyDiscord = () => {
    return (
        <>
            <div className="academy-discord">
                <h1 className="academy-discord-h">
                    Join Community on Discord
                </h1>
                <center>
                    <p className="academy-discord-p">
                        We Are a Diverse Community on Discord where topics
                        related to InfoSec are discussed. Other Chats
                        like Introduction, Course Query, Recent Trends,
                        Live Hacking Events, Security  Tool/Frameworks,
                        Career and  many other things are done
                        in a collaborative way.
                    </p>

                    <img src={AcademyDiscord1} className="academy-discord-img"></img>
                </center>

                <div className="button_ani academy-discord-button">
                    <button className="btn" >
                        Join Discord Server
                    </button>
                </div>
            </div>

        </>
    )
}

export default AcademyDiscord;