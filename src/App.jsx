import React from "react";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    )
}

export default App;