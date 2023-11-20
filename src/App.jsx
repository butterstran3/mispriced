import React from "react";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import RacingPage from "./components/pages/RacingPage";
import ServicesPage from "./components/pages/ServicesPage";
import CompanyPage from "./components/pages/CompanyPage";
import HowItWorks from "./components/pages/HowItWorks";
import Footer from "./components/footer/Footer";
import NbaPage from "./components/pages/NbaPage";

const App = () => {
    return (
        <>
            <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/racing" element={<RacingPage/>}/>
                <Route path="/nba" element={<NbaPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/company" element={<CompanyPage/>}/>e
                <Route path="/howItWorks" element={<HowItWorks/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;