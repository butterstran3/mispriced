import React from "react";
import "./invite.css";
import discord from "../../assets/mispriced_discord.png";
import { Link } from "react-router-dom";

const Invite = () => {
    return (
        <div className="invite_container">
            <div className="invite_content">
                <img alt="discord" src={discord}></img>
                <div className="invite_frame">
                    <div className="invite_info">
                        <h4 className="invite_title">Join the Mispriced Discord Server</h4>
                        <p className="invite_paragraph">
                            To start using our services, join the Mispriced Discord Server via web browser, mobile app, or desktop app. 
                            Ensure you have a verified Discord account before joining.
                            <br></br>
                            <br></br>
                            To create a Discord account go <a href="https://discord.gg/">here</a>!
                        </p>
                    </div>
                    <Link className="invite_btn btn" to="https://discord.gg/VR3ncXNzG6">Join our Discord</Link>
                </div>
            </div>
        </div>
    )
}

export default Invite;