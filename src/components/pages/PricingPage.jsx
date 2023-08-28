import React from "react";
import Pricing from "../pricing/Pricing";
import PricingHeader from "../pricingHeader/PricingHeader";
import Guarantee from "../guarantee/Guarantee";
import PricingCTA from "../pricingCTA/PricingCTA";
import Footer from "../footer/Footer";

const PricingPage = () => {
    return (
        <>
            <PricingHeader/>
            <Pricing/>
            <Guarantee/>
            <PricingCTA/>
            <Footer/>
        </>
    )
}

export default PricingPage;