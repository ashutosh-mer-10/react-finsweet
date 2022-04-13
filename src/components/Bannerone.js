import React from "react";
import Bannerimg from "../images/banner-music-img.png";
import { Row, Col } from "react-bootstrap";

const Bannerone = (props) => {
  return (
    <>
      <div className="banner-wrap banner-padding">
        <div className="container">
          <Row>
            <Col lg={6}>
              <div className="content-box">
                <h1 className="h1 title">{props.title}</h1>
                <div className="info">
                  <p>{props.info}</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img-box">
                <img src={Bannerimg} alt="sec-img" width={432} height={256} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Bannerone;
