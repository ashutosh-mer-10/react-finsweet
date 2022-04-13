import React from "react";
import { Link } from "react-router-dom";
import HostImg from "../images/host-banner-img.png";

const Bannertwo = (props) => {
  return (
    <>
      <div className="banner-two-wrap banner-padding">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6">
              <div className="img-box">
                <img src={HostImg} alt="banner-img" width={339} height={361} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h6 className="h6 subtitle">{props.subtitle}</h6>
                <h1 className="h1 title">{props.title}</h1>
                <p className="info">{props.info}</p>
                <div className="btn-wrap">
                  <Link to="/" className="cta-btn cta-btn-primary">
                    {props.btntxt}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannertwo;
