import React from "react";
import { Link } from "react-router-dom"
import "./homeCTA.css";

const HomeCTA = () => {
    return (
        <div className="homeCTA_container">
            <div className="homeCTA_inner">
                <div className="homeCTA_content">
                    <div className="homeCTA_header">
                        <h1>Take the leap now!</h1>
                        <p>
                            Join our exclusive discord server now to start beating the bookies today! 
                            Don’t settle for guesswork when you can rely on proven results.
                        </p>
                    </div>
                    <Link className="homeCTA_btn btn" to="https://launchpass.com/mispriced/free-trial">Try Mispriced for free</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeCTA;