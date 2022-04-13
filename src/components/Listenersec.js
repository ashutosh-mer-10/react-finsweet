import React from "react";
import { Row, Col } from "react-bootstrap";

import { Listener_Data } from "../data/logo-data";
import starimg from "../images/icons/star-img.png";

const Listenersec = (props) => {
  return (
    <>
      <div className="Listenersec-wrap section">
        <div className="container">
          <Row>
            <Col lg={6}>
              <div className="content">
                <h3 className="h3 title">{props.title}</h3>
                <div className="info">
                  <p>{props.info}</p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>

          <div className="listener-box-wrap">
            <Row>
              {Listener_Data.map((item, index) => {
                return (
                  <>
                    <Col lg={4}>
                      <div className="listener-box">
                        <div className="top-content">
                          <div className="left">
                            <img
                              src={item.avatar_image}
                              alt="img"
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="right">
                            <div className="content">
                              <h6 className="h6 name">{item.name}</h6>
                              <div className="star-img-box">
                                <img src={starimg} alt="img" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-content">
                          <div className="info">
                            <p>{item.info}</p>
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
      </div>
    </>
  );
};
export default Listenersec;
