import React from "react";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import PricingPage from "./components/pages/PricingPage";

const App = () => {
    return (
        <>
            <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
            </Routes>
        </>
    )
}

export default App;