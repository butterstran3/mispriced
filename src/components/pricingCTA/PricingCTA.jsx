import React from "react";
import { Link } from "react-router-dom";
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
                        Contact us <a className="email_link" href="mailto:contact@mispriced.io">here</a> and we’ll go from there!
                    </p>
                </div>
                <Link className="CTA_btn btn" to="https://launchpass.com/mispriced/free-trial">Try Mispriced for free</Link>
            </div>
        </div>
    )
}

export default PricingCTA;