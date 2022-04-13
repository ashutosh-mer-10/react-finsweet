import React, { useState } from "react";
import Bannerone from "../components/Bannerone";
import Twocolumnsecone from "../components/Twocolumnsecone";
import Twocolumnsectwo from "../components/Twocolumnsectwo";
import Recentep from "../components/Recentep";
import Listenersec from "../components/Listenersec";
import Ctabanneone from "../components/Ctabanneone";
import Oursponsers from "../components/Oursponsers";
import Relatedarticles from "../components/Relatedarticles";
import Logoslider from "../components/Logoslider";

const Home = () => {

  return (
    <>
      <Bannerone
        title="Become The Hero Of Your Own Story"
        info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
      />
      <div className="page-wrapper">
        <Logoslider/>
        <Twocolumnsecone
          title="A podcast for makers and entrepreneurs"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "
        />

        <Twocolumnsectwo
          title="My origins on YouTube in 2008"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet. "
        />
        <Recentep
          title="Recent Episodes"
          info="Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
          btntxt="See All Episodes"
        />

        <Listenersec
          title="What our listeners say"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet."
        />
        <Ctabanneone />
        <Relatedarticles title="Read our articles & news" btntxt="See More" />
        <Oursponsers />
      </div>
    </>
  );
};

export default Home;
