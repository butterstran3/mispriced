import React from "react";
import "./testimonials.css";

const Testimonials = () => {
    return (
        <div className="testimonials_container">
            <div className="testimonials_content">
                <div className="testimonials_heading">
                    <h3>Testimonials</h3>
                    <h1>What our customers are saying</h1>
                </div>
                <div className="testimonial_cards">
                    <div className="testimonial_card">
                        <div className="testimonial">
                            <h1>"</h1>
                            <p>
                                The proficiency of staff at Mispriced in finding +EV tips is absolutely insane. 
                                Despite initial scepticism, I recouped the 4 figure lifetime membership cost within four days. 
                                It’s obvious that the staff genuinely aims to help everyone achieve financial success.
                            </p>
                        </div>
                        <div className="customer_name">
                            <p>
                                Peter (Melbourne)
                            </p>
                        </div>
                    </div>
                    <div className="testimonial_card">
                        <div className="testimonial">
                            <h1>"</h1>
                            <p>
                                On my first day of signing up to Mispriced, the amount I won from the NBA tips was enough to pay a year's worth of the membership. 
                                The guides are also very comprehensive and a lot of the information there is quite hard to find online. 
                                Couldn't recommend Mispriced enough!
                            </p>
                        </div>
                        <div className="customer_name">
                            <p>
                                Allen (Melbourne)
                            </p>
                        </div>
                    </div>
                    <div className="testimonial_card">
                        <div className="testimonial">
                            <h1>"</h1>
                            <p>
                                Shout out to Mispriced. I work full time and yet I’m able to make more with Mispriced that requires absolutely no effort. 
                                The services that pascal research simplifies the betting process to the extreme to the point where I can mindlessly follow the instructions and profit.
                            </p>
                        </div>
                        <div className="customer_name">
                            <p>
                                Michael (Sydney)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;