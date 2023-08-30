import React from "react";
import Pricing from "../pricing/Pricing";
import PricingHeader from "../pricingHeader/PricingHeader";
import Guarantee from "../guarantee/Guarantee";
import PricingCTA from "../pricingCTA/PricingCTA";

const PricingPage = () => {
    return (
        <>
            <PricingHeader/>
            <Pricing/>
            <Guarantee/>
            <PricingCTA/>
        </>
    )
}

export default PricingPage;