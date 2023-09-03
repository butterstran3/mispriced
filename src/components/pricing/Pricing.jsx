import { useState, React }  from "react";
import "./pricing.css";

const Pricing = () => {
    
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
                        let discount = document.querySelector(".discount_text")
                        let price = document.querySelector(".price")
                        toggle.classList.toggle("active")
                        month.classList.toggle("active")
                        annual.classList.toggle("active")
                        if (month.classList.contains("active")) {
                            discount.innerHTML = "Billed monthly. Save 10%."
                            price.innerHTML = "$69"
                        } else if (annual.classList.contains("active")) {
                            discount.innerHTML = "Billed annually. Save 20%."
                            price.innerHTML = "$60"
                        }
                    }}>
                        <div className="toggle_btn"></div>
                    </div>
                    <p className="annual">Billed Annually</p>
                </div>
                <div className="pricing_cards">
                    <div className="pricing_card">
                        <div className="plan_info">
                            <div className="pricing_plan">
                                <h2>Starter</h2>
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
                        <div className="button_container">
                            <button className="pricing_btn btn">Select plan</button>
                        </div>
                    </div>
                    <div className="pricing_card">
                        <div className="plan_info">
                            <div className="pricing_plan">
                                <h2>Premium</h2>
                                <div className="weekly_price">
                                    <h1 className="price">$69</h1>
                                    <h3>/ week</h3>
                                </div>
                            </div>
                            <div className="discount">
                                <h4 className="discount_text">Billed Monthly. Save 10%.</h4>
                            </div>
                            <div className="plan_features">
                                <div className="feature">Horse racing tips</div>
                                <div className="feature">Greyhound racing tips</div>
                                <div className="feature">Sports tips</div>
                                <div className="feature">Esports tips</div>
                                <div className="feature">Betting tools and guides</div>
                                <div className="feature">Punter community</div>
                                <div className="feature">Fred</div>
                            </div>
                            <div className="btn_container">
                                <button className="pricing_btn btn">Select plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;