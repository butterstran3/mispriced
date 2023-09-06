import React from "react";
import "./started.css";
import started from "../../assets/get_started.png";
import { Link } from "react-router-dom";

const Started = () => {
    return (
        <div className="started_container">
            <div className="started_content">
                <div className="started_frame">
                    <div className="started_info">
                        <h4 className="started_title">Getting Started</h4>
                        <p className="started_paragraph">
                            After joining the Mispriced server on Discord, you’ll see several channels listed in the sidebar. 
                            Locate ‘Start here’ and familiarise yourself with what we do and how we do it.
                            <br></br>
                            <br></br>
                            You can choose to try our 7-day free trial or subscribe to a plan immediately!
                        </p>
                    </div>
                    <Link className="started_btn btn" to="https://discord.gg/VR3ncXNzG6">Join our Discord</Link>
                </div>
                <img alt="started" src={started}></img>
            </div>
        </div>
    )
}

export default Started;