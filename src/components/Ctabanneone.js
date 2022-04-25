import React from "react";
import { Row, Col } from "react-bootstrap";
import Design from "../images/icons/design-one.png";
import icon from "../images/icons/cta-iconone.png";

const Ctabanneone = () => {
  return (
    <>
      <div className="cta-banner-one-wrap section ">
        <div className="container">
          <Row>
            <Col lg={3}>
              <div className="icon-box text-center">
                <img src={icon} alt="icon" width={114} height={120} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="content">
                <h3 className="h3 title">
                  Receive new episodes in your inbox.
                </h3>
                <div className="form-wrapper">
                  <form action="">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                    <div className="btn-wrap">
                      <button type="submit" class="cta-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={3} className="position-relative">
              <div className="icon-box-sm text-center ">
                <img src={icon} alt="icon" width={114} height={120} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Ctabanneone;
