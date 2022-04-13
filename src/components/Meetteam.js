import React from "react";
import { Team_Data_Info } from "../data/logo-data";
import fb from "../images/icons/fb.png";

import tweet from "../images/icons/twitter.png";

import linkedin from "../images/icons/linkedin.png";

const Meetteam = (props) => {
  return (
    <>
      <div className="meet-our-team-wrap section">
        <div className="container">
          <h2 className="h2 title">{props.title}</h2>
          <div className="row">
            {Team_Data_Info.map((item, index) => {
              return (
                <>
                  <div className="col-lg-3">
                    <div className="card">
                      <div className="img-box">
                        <img
                          src={item.image}
                          alt="team-img"
                          width={308}
                          height={302}
                        />
                      </div>
                      <h2 className="h2 name">{item.name}</h2>
                      <p className="designation">{item.designation}</p>

                      <ul className="social-links">
                        <li>
                          <a href={item.fb}>
                            <img src={fb} alt="icon" width={20} height={20} />
                          </a>
                        </li>

                        <li>
                          <a href={item.tweet}>
                            <img
                              src={tweet}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </a>
                        </li>

                        <li>
                          <a href={item.linkedin}>
                            <img
                              src={linkedin}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetteam;
