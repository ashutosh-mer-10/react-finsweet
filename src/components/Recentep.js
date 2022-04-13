import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RecentEp_Data } from "../data/logo-data";
import playicon from "../images/icons/play-icon.svg";

const Recentep = (props) => {
  return (
    <>
      <div className="recent-episodes-wrap section">
        <div className="container">
          <div className="recent-ep-content">
            <Row>
              <Col lg={6}>
                <div className="content">
                  <h3 className="h3 title">{props.title}</h3>
                  <p className="info">{props.info}</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="btn-wrap text-lg-end text-start">
                  <Link to="/" class="cta-btn cta-btn-primary">
                    {props.btntxt}
                  </Link>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="recentep-data-box">
            {RecentEp_Data.map((item, index) => {
              return (
                <>
                  <Col lg={4}>
                    <div className="recent-ep-box">
                      <div className="img-box">
                        <img
                          src={item.image}
                          alt="recent-ep-img"
                          width={416}
                          height={256}
                        />
                      </div>
                      <div className="content">
                        <h4 className="h4 title">{item.title}</h4>
                        <div className="info">
                          <p>{item.info}</p>
                        </div>
                        <div className="btn-wrap">
                          <Link to="/single-podcast" className="cta-btn-icon">
                            <img src={playicon} alt="icon" class="icon svg" />
                            {item.btntxt}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Recentep;
