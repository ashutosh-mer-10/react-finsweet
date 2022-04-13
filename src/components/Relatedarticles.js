import React from "react";
// import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Shape_img from "../images/related-shape.png";
import { Related_Articles } from "../data/logo-data";

const Relatedarticles = (props) => {
  return (
    <>
      <div className="related-articles-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="related-shape-wrap">
                <div className="content">
                  <h2 className="h2 title">{props.title}</h2>
                  <Link to="/" className="">
                    {props.btntxt}
                  </Link>
                </div>
                <div className="img-box">
                  <img src={Shape_img} alt="img" width={416} height={320} />
                </div>
              </div>
            </div>

            {Related_Articles.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div className="related-articles-wrap" id={item.id}>
                      <div className="img-box">
                        <img
                          src={item.image}
                          alt="img"
                          width={416}
                          height={320}
                        />
                      </div>
                      <div className="content">
                        <h3 className="h3 title">{item.title}</h3>
                        <div className="info">
                          <p>{item.info}</p>
                        </div>
                        <div className="btn-wrap">
                          <Link to="/" className="cta-link">
                            {item.btntxtone}
                          </Link>
                        </div>
                      </div>
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

export default Relatedarticles;
