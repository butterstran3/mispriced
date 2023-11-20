import React from "react";
import "./pricingHeader.css";
import checkbox from "../../assets/checkbox.svg";

const PricingHeader = ({heading}) => {
    return (
        <div className="header_container">
            <div className="pricingHeader_content">
                <div className="pricingHeader_info">
                    <h1 className="pricing_heading">{heading}</h1>
                    <p className="pricing_subheading">Our pricing plans are affordable and tailored to your needs. Choose a plan that works best for you.</p>
                </div>
                <div className="pricing_features">
                    <div className="pricing_feature">
                        <img className="checkbox" alt="checkbox" src={checkbox}/>
                        <p className="feature_statement">No lock in contracts</p>
                    </div>
                    <div className="pricing_feature">
                        <img className="checkbox" alt="checkbox" src={checkbox}/>
                        <p className="feature_statement">No cancellation fees</p>
                    </div>
                    <div className="pricing_feature">
                        <img className="checkbox" alt="checkbox" src={checkbox}/>
                        <p className="feature_statement">Ongoing support</p>
                    </div>
                    <div className="pricing_feature">
                        <img className="checkbox" alt="checkbox" src={checkbox}/>
                        <p className="feature_statement">Profit guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingHeader