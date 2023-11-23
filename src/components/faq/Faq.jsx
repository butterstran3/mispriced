import { React, useState } from "react";
import "./faq.css";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="faq_container">
            <div className="faq_inner">
                <div className="faq_header">
                    <h1>Frequently asked questions</h1>
                    <p>Have questions? We're here to help</p>
                </div>
                <div className="faq_list">
                    {data.map((item, i) => (
                        <div className="faq">
                            <div className="question" onClick={() => toggle(i)}>
                                <h3>{item.question}</h3>
                                <img alt="plus" className="plus" src={selected === i ? minus : plus}/>
                            </div>
                            <div className={selected === i ? "answer active" : "answer"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        question: "I can't get on all the tips because you post too late, can you tip earlier?",
        answer: "Our bots are designed to detect inefficiencies in the markets, which often occur before an event starts because individuals with inside information tend to keep it to themselves to manipulate the odds. As developers, we aim to benefit from late market fluctuations and capture all available information to identify the \"best bet\" before our bots identify a profitable wager. Simply put, due to time constraints, it's impractical for anyone to place bets on all opportunities. Our bots may identify inefficiencies very late, and sometimes the delay between the messaging service of the Discord bot API and the event start time (even if it's under one second) can hinder an individual from betting."
    },
    {
        question: "The odds change everytime I click 'bet' is this normal?",
        answer: "Due to the dynamic nature of the markets seconds before jump time, the bookmakers websites may show a price, however once you click on the price it may say \"odd change\". Due to the nature of our bots, and the time constraint to post bets, we do not account for these."
    },
    {
        question: "Your results suggest that you are profitable every week, can you guarantee me profit?",
        answer: "Past outcomes do not guarantee future results. Additionally, we do not offer personalized financial advice, and all information provided is general in nature."
    },
    {
        question: "Why did the bot miss a race?",
        answer: "We strive to ensure that our bots operate reliably and efficiently, but we cannot guarantee that they will be error-free or uninterrupted at all times. We will not be helpd liable for any losses, damages, or expenses arising from the malfunction of our bots, including but not limited to technical failurs, errors, or delays. By using our bots, you assume all risks and responsibilities for any outcomes resulting from their use."
    }

]

export default Faq;