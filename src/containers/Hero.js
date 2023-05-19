import React from "react";
import heroimage from "../assets/images/hero-image.jpg"
import "../css/Hero.css";

const Hero = () => {

    
    function scroll() {
    window.scrollBy(0,400);
    }

    return(
        <section className="hero-section" style={{backgroundImage:`url("${heroimage}")`}}>
            <div className="hero-content">
                <h3> Fashion Adda</h3>
                <button onClick={() => scroll()}>Shop Now</button>
            </div>
        </section>
    );
}

export default Hero;

