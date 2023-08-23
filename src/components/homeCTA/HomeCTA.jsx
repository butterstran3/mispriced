import React from "react";
import "./homeCTA.css";

const HomeCTA = () => {
    return (
        <div className="homeCTA_container">
            <div className="homeCTA_content">
                <div className="homeCTA_header">
                    <h1>Take the leap now!</h1>
                    <p>
                        Join our exclusive discord server now to start beating the bookies today! 
                        Don’t settle for guesswork when you can rely on proven results.
                    </p>
                </div>
                <button className="homeCTA_btn btn">
                    Try Mispriced for free
                </button>
            </div>
        </div>
    )
}

export default HomeCTA;