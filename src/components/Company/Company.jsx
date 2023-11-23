import React from "react";
import "./company.css";
import mission from "../../assets/mission.png";
import focus from "../../assets/focus.png";
import empowering from "../../assets/successful.png";

const Company = () => {
    return (
        <div className="company_container">
            <div className="company_inner">
                <div className="company_content">
                    <div className="company_heading">
                        <h1>A little about us.</h1>
                    </div>
                    <div className="card_container">
                        <div className="card_reverse">
                            <div className="card_content">
                                <h4>Our Mission</h4>
                                <p>Mispriced is dedicated to helping bettors become successful by providing them with the tools they need to win. We’re committed to staying at the forefront of the industry, continuously improving our tools and resources to help clients achieve long-term success in their betting endeavours.</p>
                            </div>
                            <div className="card_image">
                                <img alt="mission" src={mission}></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_content">
                                <h4>Our focus</h4>
                                <p>Primarily focusing on racing, our last-minute horse racing betting algorithm will utilise a wide range of bookmakers and exchanges to determine the best bet for our users for each bookie or to decide to skip the race altogether. By utilising multiple sources, we are able to compare odds and lines from different bookmakers in real-time, and find the best value for our users at the last second before the race starts.</p>
                            </div>
                            <div className="card_image">
                                <img alt="focus" src={focus}></img>
                            </div>
                        </div>
                        <div className="card_reverse">
                            <div className="card_content">
                                <h4>Empowering Clients</h4>
                                <p>Our goal is to empower our clients to make informed and strategic bets, giving them a competitive edge over the bookies.</p>
                            </div>
                            <div className="card_image">
                                <img alt="empowering" src={empowering}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;