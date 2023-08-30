import React from "react";
import "./subscribe.css";
import bookies from "../../assets/bookmakers.png";

const Subscribe = () => {
    return (
        <div className="subscribe_container">
            <div className="subscribe_content">
                <img alt="bookies" src={bookies}></img>
                <div className="subscribe_info">
                    <h4>Subscribe to desired bookmaker and sports</h4>
                    <p>
                        Select the bots you want to see and use for the day, or, in general. 
                        Bots will send notifications one minute before the race starts and post tips at the race's 0-second mark.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;