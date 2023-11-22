import React from "react";
import Faq from "../faq/Faq";
import Header from "../header/Header";
import HowCTA from "../howCTA/HowCTA";
import Invite from "../invite/Invite";
import Started from "../started/Started";
import Subscribe from "../subscribe/Subscribe";
import Qna from "../qna/Qna";

const HowItWorks = () => {
    return (
        <>
            <Header title="How it works" subtitle="Join the Mispriced community in Discord, where betting enthusiasts gather to access exclusive tips, engage in live discussions about upcoming games, and get expert advice to enhance their betting skills."/>
            <Invite/>
            <Started/>
            <Subscribe/>
            <Qna/>
            <Faq/>
            <HowCTA/>
        </>
    )
}

export default HowItWorks;