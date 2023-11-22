import React from "react";
import PricingHeader from "../pricingHeader/PricingHeader";
import Guarantee from "../guarantee/Guarantee";
import NbaInfo from "../NbaInfo/NbaInfo";
import NbaPrice from "../NbaPrice/NbaPrice";
import JoinCTA from "../joinCTA/JoinCTA";

const NbaPage = () => {
    return (
        <>
            <PricingHeader heading="NBA Membership"/>
            <NbaPrice/>
            <NbaInfo/>
            <Guarantee/>
            <JoinCTA/>
        </>
    )
}

export default NbaPage;