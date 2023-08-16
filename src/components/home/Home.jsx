import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {

    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_info">
                    <h1>Bet faster, bet smarter</h1>
                    <p>Mispriced helps you beat the bookies and maximise your chances of winning.</p>
                    <Link className="home_btn btn">Try Mispriced for free</Link>
                </div>
                <div className="home_image">
                    
                </div>
            </div>
        </div>
    )
}

export default Home;