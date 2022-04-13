import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/icons/footer-logo.png";
import { Footer_Logo } from "../data/logo-data";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <div className="container">
          <Row>
            <Col lg={3}>
              <div className="footer-logo">
                <img src={Logo} alt="img" width={200} height={48} />
              </div>
            </Col>

            <Col lg={3}>
              <div className="footer-links">
                <div className="title">Pages</div>
                <ul className="links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Podcast</Link>
                  </li>
                  <li>
                    <Link to="/">Host</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-links">
                <div className="title">Reach Us</div>
                <ul className="links">
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-logo-links">
                <ul>
                  {Footer_Logo.map((item, index) => {
                    return (
                      <>
                        <li id={item.index} key={index}>
                          <a href={item.link}>
                            <img src={item.image} alt="social-logo" />
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
