import React from "react";
import PricingHeader from "../pricingHeader/PricingHeader";
import Guarantee from "../guarantee/Guarantee";
import PricingCTA from "../pricingCTA/PricingCTA";
import NbaInfo from "../NbaInfo/NbaInfo";
import NbaPrice from "../NbaPrice/NbaPrice";

const NbaPage = () => {
    return (
        <>
            <PricingHeader heading="NBA Membership"/>
            <NbaPrice/>
            <NbaInfo/>
            <Guarantee/>
            <PricingCTA/>
        </>
    )
}

export default NbaPage;