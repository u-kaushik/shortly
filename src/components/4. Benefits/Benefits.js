import React from "react";
import "../../sass/_benefits.scss";
import Brand from "../../assets/icons/icon-brand-recognition.svg";
import Records from "../../assets/icons/icon-detailed-records.svg";
import Customization from "../../assets/icons/icon-fully-customizable.svg";

function Benefits() {
  return (
    <div className="Benefits">
      <div className="benefits__text">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="benefits__boxes">
        <div className="benefits__box box-1">
          <div className="benefits__box-info">
            <div className="benefits__img-background">
              <img src={Brand} alt="brand" />
            </div>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="benefits__box box-2">
          <div className="benefits__box-info">
            <div className="benefits__img-background">
              <img src={Records} alt="records" />
            </div>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="benefits__box box-3">
          <div className="benefits__box-info">
            <div className="benefits__img-background">
              <img src={Customization} alt="customisation" />
            </div>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
