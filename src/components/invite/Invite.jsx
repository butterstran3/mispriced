import React from "react";
import "./invite.css";
import discord from "../../assets/mispriced_discord.png";

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
                            To create a Discord account go here!
                        </p>
                    </div>
                    <button className="invite_btn btn">Join our Discord</button>
                </div>
            </div>
        </div>
    )
}

export default Invite;