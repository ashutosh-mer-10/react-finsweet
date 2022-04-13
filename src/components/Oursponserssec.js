import React from "react";
import { Our_Sponser_Logo_Sec } from "../data/logo-data";
import { Link } from "react-router-dom";

const Oursponserssec = (props) => {
  return (
    <>
      <div className="our-sponsers-sec section">
        <div className="container">
          <h2 className="h2 sec-title">{props.title}</h2>

          <div className="row">
            {Our_Sponser_Logo_Sec.map((item, index) => {
              if (index == 5) {
                return (
                  <>
                    <div className="col-lg-4">
                      <div className="card bc-sp">
                        <h3 className="h3 title text-white">
                          Become a Sponsor
                        </h3>
                        <Link to="/" className="cta-link white">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="col-lg-4">
                      <div className="card ">
                        <img
                          src={item.image}
                          alt="logo"
                          width={416}
                          height={224}
                        />
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Oursponserssec;
