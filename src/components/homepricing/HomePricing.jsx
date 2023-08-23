import React from "react";
import { Link } from "react-router-dom";
import "./homepricing.css";
import Pricing from "../pricing/Pricing";

const HomePricing = () => {

    return (
        <div className="home_pricing_container">
            <div className="pricing_content">
                <div className="pricing_intro">
                    <div className="pricing_header">
                        <h1>Find the perfect plan</h1>
                        <p>
                            Whether you’re a betting professional or just getting started, Mispriced has you covered.
                        </p>
                    </div>
                    <div className="btn_container">
                        <Link className="pricing_btn btn">See full pricing details</Link>
                    </div>
                </div>
                <div className="component_container">
                    <Pricing className="pricing_component"/>
                </div>
            </div>
        </div>
    )
}

export default HomePricing;