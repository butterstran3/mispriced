import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import landing from "../../assets/landing_page.png";

const Home = () => {

    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_info">
                    <h1>Bet faster,</h1>
                    <h1>bet smarter</h1>
                    <p>Mispriced helps you beat the bookies and maximise your chances of winning.</p>
                    <Link className="home_btn btn" to="https://discord.gg/VR3ncXNzG6">Try Mispriced now</Link>
                </div>
                <div className="home_image">
                    <img alt="landing" src={landing}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;