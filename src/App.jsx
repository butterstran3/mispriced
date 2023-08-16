import React from "react";
import Nav from "./components/navbar/Nav";
import Homepage from "./components/pages/Homepage";
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
            </Routes>
        </>
    )
}

export default App;