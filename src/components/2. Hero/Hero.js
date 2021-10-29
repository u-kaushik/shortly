import React from "react";
import "../../sass/_hero.scss";
import Hero_img from "../../assets/illustrations/illustration-working.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__info">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className="Hero__button">Get Started</button>
      </div>
      <div className="Hero__img">
        <img src={Hero_img} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
