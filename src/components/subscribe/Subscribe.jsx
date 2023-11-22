import React from "react";
import "./subscribe.css";
import bookies from "../../assets/channels.png";

const Subscribe = () => {
    return (
        <div className="subscribe_container">
            <div className="subscribe_inner">
                <div className="subscribe_content">
                    <img alt="bookies" src={bookies}></img>
                    <div className="subscribe_info">
                        <h4>Follow your desired bookmaker and sport</h4>
                        <p>
                            Follows the bots you want to see and use for the day, or, in general. 
                            Racing bots will send notifications one minute before the race starts and post tips at the race's 30-second mark.
                            Our sports tips will come out from the night before to right before the event starts as we're always on the hunt for profitable bets!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;