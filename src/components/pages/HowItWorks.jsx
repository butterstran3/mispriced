import React from "react";
import Faq from "../faq/Faq";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HowCTA from "../howCTA/HowCTA";
import Invite from "../invite/Invite";
import Started from "../started/Started";
import Subscribe from "../subscribe/Subscribe";
import Qna from "../qna/Qna";

const HowItWorks = () => {
    return (
        <>
            <Header title="How it works" subtitle="Join the Mispriced community on Discord or the web, where betting enthusiasts..."/>
            <Invite/>
            <Started/>
            <Subscribe/>
            <Qna/>
            <Faq/>
            <HowCTA/>
            <Footer/>
        </>
    )
}

export default HowItWorks;