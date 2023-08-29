import React from "react";
import Company from "../Company/Company";
import CompanyCTA from "../CompanyCTA/CompanyCTA";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const CompanyPage = () => {
    return (
        <>
            <Header title="Our Company" subtitle="Eets."/>
            <Company/>
            <CompanyCTA/>
            <Footer/>
        </>
    )
}

export default CompanyPage;