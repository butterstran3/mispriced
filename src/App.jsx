import React from "react";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import PricingPage from "./components/pages/PricingPage";
import ServicesPage from "./components/pages/ServicesPage";
import CompanyPage from "./components/pages/CompanyPage";
import HowItWorks from "./components/pages/HowItWorks";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/company" element={<CompanyPage/>}/>
                <Route path="/howItWorks" element={<HowItWorks/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;