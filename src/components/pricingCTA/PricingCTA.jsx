import React from "react";
import "./pricingCTA.css";

const PricingCTA = () => {
    return (
        <div className="pricingCTA_container">
            <div className="pricingCTA_content">
                <div className="CTA_container">
                    <h1>Still unsure?</h1>
                    <p>
                        We completely understand. That’s why we offer a 3-day free trial - with no strings attached! 
                        If you still have any queries or need guidance, our dedicated team is ready to help. 
                        Contact us here and we’ll go from there!
                    </p>
                </div>
                <button className="CTA_btn btn">Try Mispriced for free</button>
            </div>
        </div>
    )
}

export default PricingCTA;