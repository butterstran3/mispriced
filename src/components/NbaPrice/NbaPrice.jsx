import { useState, React }  from "react";
import "./nbaprice.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const weeklyPlanURL = "https://launchpass.com/mispriced/nba-weekly";
const monthlyPlanURL = "https://launchpass.com/mispriced/nba-monthly";

const NbaPrice = () => {
        
    const [annually, setAnnually] = useState(false)

    return (
        <div className="pricing_container">
            <div className="pricing_components">
                <div className="pricing_toggle">
                    <p className="month active">Billed Weekly</p>
                    <div className="toggle_container" onClick={() => {
                        setAnnually(!annually)
                        let toggle = document.querySelector(".toggle_container")
                        let month = document.querySelector(".month")
                        let annual = document.querySelector(".annual")
                        let discount = document.querySelector(".discount_text")
                        let price = document.querySelector(".price")
                        let ribbon = document.querySelector(".ribbon")
                        let card = document.querySelector(".annual_card")
                        let frequency = document.querySelector(".frequency")
                        toggle.classList.toggle("active")
                        month.classList.toggle("active")
                        annual.classList.toggle("active")
                        ribbon.classList.toggle("open")
                        card.classList.toggle("open")
                        if (month.classList.contains("active")) {
                            discount.innerHTML = "Billed weekly."
                            price.innerHTML = "$69"
                            frequency.innerHTML = "/ week"
                        } else if (annual.classList.contains("active")) {
                            discount.innerHTML = "Billed monthly. Save 10%."
                            price.innerHTML = "$249"
                            frequency.innerHTML = "/ month"
                        }
                    }}>
                        <div className="toggle_btn"></div>
                    </div>
                    <p className="annual">Billed Monthly</p>
                </div>
                <div className="pricing_cards">
                    <div className="pricing_card annual_card nba_card">
                        <div className="ribbon_container">
                            <div className="ribbon">
                                <AiFillStar/>
                                <p>MOST POPULAR</p>
                            </div>
                        </div>
                        <div className="plan_info">
                            <div className="pricing_plan">
                                <div className="plan_header">
                                    <h2>Premium</h2>
                                </div>
                                <div className="weekly_price">
                                    <h1 className="price">$69</h1>
                                    <h3 className="frequency">/ week</h3>
                                </div>
                            </div>
                            <div className="discount">
                                <h4 className="discount_text">Billed weekly.</h4>
                            </div>
                            <div className="plan_features">
                                <div className="feature">Regular season tips</div>
                                <div className="feature">Arbitrage opportunities</div>
                                <div className="feature">Middle bets</div>
                                <div className="feature">Awards</div>
                            </div>
                            <div className="btn_container">
                                <Link className="pricing_btn btn" to={annually ? monthlyPlanURL : weeklyPlanURL}>Select plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NbaPrice;