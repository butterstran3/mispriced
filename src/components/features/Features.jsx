import React from "react";
import "./features.css";
import algorithm from "../../assets/algorithm.png";
import alerts from "../../assets/alerts.png";
import iq from "../../assets/betting-iq.png";

const Features = () => {
    return (
        <div className="features_container">
            <div className="features_content">
                <div className="features_heading">
                    <h1>How we empower you</h1>
                </div>
                <div className="card_container">
                    <div className="feature_card">
                        <div className="card_content">
                            <h4>Advanced Algorithm</h4>
                            <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                        </div>
                        <div className="card_image">
                            <img alt="algorithm" src={algorithm}></img>
                        </div>
                    </div>
                    <div className="feature_card_reverse">
                        <div className="card_content">
                            <h4>Alerts</h4>
                            <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                        </div>
                        <div className="card_image">
                            <img alt="alerts" src={alerts}></img>
                        </div>
                    </div>
                    <div className="feature_card">
                        <div className="card_content">
                            <h4>Grow your Betting IQ</h4>
                            <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                        </div>
                        <div className="card_image">
                            <img alt="iq" src={iq}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;