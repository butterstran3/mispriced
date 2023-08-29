import React from "react";
import Home from "../home/Home";
import Mission from "../mission/Mission";
import Features from "../features/Features";
import HomePricing from "../homepricing/HomePricing";
import Testimonials from "../testimonials/Testimonials";
import HomeCTA from "../homeCTA/HomeCTA";
import Footer from "../footer/Footer";
// import Header from "../header/Header";

const HomePage = () => {


    return (
        <>
            <Home/>
            <Mission/>
            <Features/>
            <HomePricing/>
            <Testimonials/>
            <HomeCTA/>
            <Footer/>
        </>
    )
}

export default HomePage;