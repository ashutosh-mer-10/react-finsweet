import React from "react";
import { Link } from "react-router-dom";
import Bannerimg from "../images/podcasts-banner.png";
import Playbtn from "../images/icons/playbtn-green.png";
import Recentep from "../components/Recentep";
import Herosec from "../components/Herosec";
import HeroImg from "../images/hero-sec-bg-two.png";
import Oursponsers from "../components/Oursponsers";

const Podcast = () => {
  return (
    <>
      <div
        className="podcast-banner-wrap bg-img"
        style={{ backgroundImage: `url(${Bannerimg})` }}
      >
        <div className="container">
          <div className="content text-white">
            <h6 className="h6 tag">Featured</h6>
            <h2 className="h2 title">
              A UX Case Study on Creating a Studious Environment{" "}
            </h2>
            <p className="info">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon
            </p>
            <div className="btn-wrap">
              <Link to="/" className="cta-btn-icon">
                <div className="icon">
                  <img src={Playbtn} alt="icon" />
                </div>
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <Recentep
          title="Recent Episodes"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
          btntxt="See All Episodes"
        />

        <Recentep
          title="All Podcasts"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
          btntxt="See All Episodes"
        />

        <Herosec
          bgimg={HeroImg}
          title="Become The Hero Of Your Own Story"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet."
          btntxt="Contact Us"
        />

        <Oursponsers />
      </div>
    </>
  );
};

export default Podcast;
