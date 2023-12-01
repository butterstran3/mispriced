import { React } from "react";
import { Link } from "react-router-dom";
import "./homepricing.css";

const HomePricing = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="home_pricing_container">
            <div className="home_pricing_inner">
                <div className="pricing_content">
                    <div className="pricing_intro">
                        <div className="pricing_header">
                            <h1>Find the perfect plan</h1>
                            <p>
                                Whether you’re a betting professional or just getting started, Mispriced has you covered.
                            </p>
                        </div>
                        <div className="btn_container">
                            <Link className="price_btn btn" to="/racing" onClick={scrollToTop}>See full pricing details</Link>
                        </div>
                    </div>
                    <div className="price_component">
                    </div>
                    <div className="price_cards">
                        <div className="price_card">
                            <div className="plan_info">
                                <div className="pricing_plan">
                                    <h2>Racing Premium</h2>
                                    <div className="weekly_price">
                                        <h1>$19</h1>
                                        <h3>/ week</h3>
                                    </div>
                                </div>
                                <div className="plan_features">
                                    <div className="feature">Horse racing tips</div>
                                    <div className="feature">Greyhound racing tips</div>
                                    <div className="feature">Sports tips</div>
                                    <div className="feature">Esports tips</div>
                                    <div className="feature">Betting tools and guides</div>
                                    <div className="feature">Punter community</div>
                                </div>
                            </div>
                        </div>
                        <div className="price_card annual_card">
                            <div className="plan_info">
                                <div className="pricing_plan">
                                    <div className="plan_header">
                                        <h2>NBA Premium</h2>
                                    </div>
                                    <div className="weekly_price">
                                        <h1 className="price">$69</h1>
                                        <h3>/ week</h3>
                                    </div>
                                </div>
                                <div className="plan_features">
                                    <div className="feature">Regular season tips</div>
                                    <div className="feature">Arbitrage Bets</div>
                                    <div className="feature">Middle Bets</div>
                                    <div className="feature">Awards Tips</div>
                                    <div className="feature">Sports Tips</div>
                                    <div className="feature">Betting tools and guides</div>
                                    <div className="feature">Punter community</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePricing;