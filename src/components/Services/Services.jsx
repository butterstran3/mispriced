import React from "react";
import "./services.css";
import fred from "../../assets/fred.png";
import bespoke from "../../assets/bespoke.png";
import modelling from "../../assets/modelling.png";

const Services = () => {
    return (
        <div className="services_container">
            <div className="services_content">
                <div className="services_heading">
                    <h1>What else can we do for you?</h1>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="card_content">
                            <h4>Fred (Automated Betting)</h4>
                            <p>We also provide an option for users to set up a budget and subscribe to automated betting, which will automatically place the bet for them on their behalf.</p>
                        </div>
                        <div className="card_image">
                            <img alt="fred" src={fred}></img>
                        </div>
                    </div>
                    <div className="card_reverse">
                        <div className="card_content">
                            <h4>Bespoke Software Solutions</h4>
                            <p>Optimise your betting strategy with our proprietary gambling software, engineered to align with your individual risk appetite and preferences. Utilising sophisticated algorithms, it rapidly evaluates favourable odds from numerous bookmakers, offering a user-friendly interface and personalised settings to cater to both expert and novice gamblers.</p>
                        </div>
                        <div className="card_image">
                            <img alt="bespoke" src={bespoke}></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_content">
                            <h4>Modelling</h4>
                            <p>Our advanced modelling service utilies complex algorithms to assess historical data and various factors for horse and dog races. We provide the most advantageous bet based on odds and bookmaker lines.</p>
                        </div>
                        <div className="card_image">
                            <img alt="modelling" src={modelling}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;