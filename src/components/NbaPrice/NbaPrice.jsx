import { useState, React }  from "react";
import "./nbaprice.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NbaPrice = () => {
        
    const [annually, setAnnually] = useState(false)

    return (
        <div className="pricing_container">
            <div className="pricing_components">
                <div className="pricing_toggle">
                    <p className="month active">Billed Monthly</p>
                    <div className="toggle_container" onClick={() => {
                        setAnnually(!annually)
                        let toggle = document.querySelector(".toggle_container")
                        let month = document.querySelector(".month")
                        let annual = document.querySelector(".annual")
                        let price = document.querySelector(".price")
                        toggle.classList.toggle("active")
                        month.classList.toggle("active")
                        annual.classList.toggle("active")
                        if (month.classList.contains("active")) {
                            price.innerHTML = "$69"
                        } else if (annual.classList.contains("active")) {
                            price.innerHTML = "$60"
                        }
                    }}>
                        <div className="toggle_btn"></div>
                    </div>
                    <p className="annual">Billed Annually</p>
                </div>
                <div className="pricing_cards">
                    <div className="pricing_card">
                        <div className="plan_info nba">
                            <div className="pricing_plan">
                                <img className="price_logo" src={logo}></img>
                                <h2>Weekly</h2>
                                <div className="weekly_price">
                                    <h1 className="price">$69</h1>
                                    <h3>/ week</h3>
                                </div>
                            </div>
                            <div className="plan_features">
                                <div className="feature">Regular season tips</div>
                                <div className="feature">Arbitrage opportunities</div>
                                <div className="feature">Middle bets</div>
                                <div className="feature">Awards</div>
                            </div>
                            <div className="btn_container">
                                <Link className="pricing_btn btn" to="">Select plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NbaPrice;