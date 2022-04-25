import React from "react";
import Hostimg from "../images/host-two-img.png";
import Bannertwo from "../components/Bannertwo";
import Logoslider from "../components/Logoslider";
import Oursponsers from "../components/Oursponsers";
import Recentep from "../components/Recentep";
import { Card_Info_Data } from "../data/logo-data";
import HeroImg from "../images/hero-sec-bg.png";
import Herosec from "../components/Herosec";
import { motion } from "framer-motion";

const Host = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, transition: { duration: 0.5 } }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Bannertwo
          subtitle="About The Host"
          title="Hey there, I’m Andrew Jonson and welcome to my Podcast"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
          btntxt="Know More"
        />

        <div className="page-wrapper">
          <Logoslider />

          <div className="host-two-column-wrap section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="content">
                    <h2 className="h2 title">
                      A small story about a big dream —
                    </h2>
                    <p className="info">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle. By the same illusion which lifts
                      the horizon
                    </p>
                    <h5 className="h5 subtitle">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-box">
                    <img src={Hostimg} alt="sec-img" width={630} height={615} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="origin-wrap section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="content">
                    <h2 className="h2 title">My origins on YouTube in 2008</h2>

                    <div className="info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies amet odio
                        fringilla. Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl
                      </p>
                      <p>
                        <strong>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mus cras lacus tellus morbi viverra suspendisse
                          ornare.
                        </strong>
                        Sit volutpat, volutpat ut netus malesuada enim penatibus
                        non aliquet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content">
                    <h2 className="h2 title">My origins on YouTube in 2008</h2>

                    <div className="info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies amet odio
                        fringilla. Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies amet odio
                        fringilla. Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies ame.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-info-wrap section-bg">
            <div className="container">
              <div className="row">
                {Card_Info_Data.map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-3">
                        <div className="card vert-move1">
                          <div className="icon text-center">
                            <img
                              src={item.icon}
                              alt="icon"
                              width={128}
                              height={128}
                            />
                          </div>
                          <h1 className="h1 title text-white">{item.title}</h1>
                          <h2 className="h2 subtitle text-white">
                            {item.subtitle}
                          </h2>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <Herosec
            bgimg={HeroImg}
            title="Become The Hero Of Your Own Story"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet."
            btntxt="Contact Us"
          />

          <Recentep
            title="Recent Episodes"
            info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
            btntxt="See All Episodes"
          />

          <Oursponsers />
        </div>
      </motion.div>
    </>
  );
};

export default Host;
