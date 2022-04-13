import React from "react";
import Heroimg from "../images/hero-sec-bg.png";
import { Link } from "react-router-dom";
import { ReactComponent as HeartRate } from "../images/icons/heartrate.svg";

const Herosec = (props) => {
  return (
    <>
      <div
        className="hero-sec-wrap overlay section"
        style={{ backgroundImage: `url(${props.bgimg})` }}
      >
        <div className="container">
          <div className="content">
            <h1 className="h1 title">{props.title}</h1>
            <p className="info">{props.info}</p>
            <div className="btn-wrap">
              <Link to="/" className="cta-btn cta-btn-secondary white">
                {props.btntxt}
              </Link>
            </div>
          </div>

          <div className="heartrate-wrap">
            <HeartRate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
