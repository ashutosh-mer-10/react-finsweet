import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/icons/logo.svg";
import fb from "../images/icons/fb.svg";
import ig from "../images/icons/ig.svg";
import link from "../images/icons/link.svg";
import menuicon from "../images/icons/menu-icon.svg";
import closeicon from "../images/icons/close-icon.svg";
import "../css/header.css";

const Header = () => {
  const [toggleButton, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleButton);
  };
  return (
    <>
      <div className="header-wrap">
        <header>
          <div className="container d-flex flex-wrap">
            <div className="left">
              <div className="header-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" width={135} height={33} />
                </Link>
              </div>
            </div>
            <div
              className={
                toggleButton
                  ? "right d-lg-flex menu-active "
                  : "right d-lg-flex  "
              }
            >
              <nav className="menu">
                <div className="close-btn d-lg-none d-block text-end py-3 px-2">
                  <a href="javascript:void(0);" onClick={handleToggle}>
                    <img src={closeicon} alt="icon" width={22} height={22} />
                  </a>
                </div>
                <ul className="links d-flex flex-wrap">
                  <li className="nav-link">
                    <Link to="/podcasts" className="nav-item">
                      Podcasts
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/host" className="nav-item">
                      Host
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/about" className="nav-item">
                      About
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/blog" className="nav-item">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to="#" className="nav-item">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="social-menu">
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <img src={fb} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={ig} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={link} alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu d-lg-none d-block">
              <a href="javascript:void(0);" onClick={handleToggle}>
                <img src={menuicon} alt="icon" width={22} height={22} />
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
