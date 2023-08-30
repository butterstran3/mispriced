import React from "react";
import Services from "../Services/Services";
import ServicesCTA from "../ServicesCTA/ServicesCTA";
import Header from "../header/Header";

const OtherServicesPage = () => {
    return (
        <>
            <Header title="Other Services" subtitle="At Mispriced, we offer a range of other services to cater to all your needs. Experience tailored solutions that will drive your success."/>
            <Services/>
            <ServicesCTA/>
        </>
    )
}

export default OtherServicesPage;