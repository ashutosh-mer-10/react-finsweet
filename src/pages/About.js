import React from "react";
import { Link } from "react-router-dom";
import Recentep from "../components/Recentep";
import BannerImg from "../images/about-banner-img.png";
import { About_Info_Data } from "../data/logo-data";
import Few_Words_Img from "../images/few-words-img.png";
import Oursponsers from "../components/Oursponsers";
import Meetteam from "../components/Meetteam";
import Oursponserssec from "../components/Oursponserssec";

const About = () => {
  return (
    <>
      <div className="about-banner-wrap banner-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="content">
                <h1 className="title">About Finsweet Podcast</h1>
                <p className="info">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="btn-wrap">
                  <Link to="/" className="cta-btn cta-btn-primary">
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img-box">
                <img
                  src={BannerImg}
                  alt="banner-img"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-wrapper">
        <div className="about-info-wrap section">
          <div className="container">
            <div className="row">
              {About_Info_Data.map((item, index) => {
                return (
                  <>
                    <div className="col-lg-4">
                      <div className="content">
                        <img
                          src={item.icon}
                          alt="icon"
                          width={80}
                          height={80}
                        />
                        <h4 className="h4 title">{item.title}</h4>
                        <p className="info">{item.info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="few-words-wrap section">
          <div className="container">
            <div className="inner-wrap">
              <h2 className="h2 title">A few words about our team</h2>
              <img src={Few_Words_Img} alt="" className="img-box" />
              <div className="row">
                <div className="col-lg-6">
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem eget condimentum enim libero ultricies amet odio
                    fringilla. Ut nibh morbi augue porta aliquet commodo.
                    Fermentum auctor lacus eget in ut integer viverra sed.
                    Penatibus tortor consequat, habitasse non nisl.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem eget condimentum enim libero ultricies amet odio
                    fringilla. Ut nibh morbi augue porta aliquet commodo.
                    Fermentum auctor lacus eget in ut integer viverra sed.
                    Penatibus tortor consequat, habitasse non nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Meetteam title="Meet Our Team " />

        <Oursponserssec title="Our Sponsors" />

        <Recentep
          title="Recent Episodes"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
          btntxt="See All Episodes"
        />

        <Oursponsers />
      </div>
    </>
  );
};

export default About;
