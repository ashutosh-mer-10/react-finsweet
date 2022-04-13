import React from "react";
import Bannerimg from "../images/single-banner-img.png";
import Recentep from "../components/Recentep";
import Oursponsers from "../components/Oursponsers";
import { Link } from "react-router-dom";
import { Footer_Logo_Dark } from "../data/logo-data";
import fb from "../images/icons/fb.svg";
import ig from "../images/icons/ig.svg";
import link from "../images/icons/link.svg";
import avatarImg from "../images/avatar-img-quote.png";

const Singlepodcast = () => {
  return (
    <>
      <div className="single-podcast-wrap section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-box">
                <img
                  src={Bannerimg}
                  alt="banner-img"
                  width={616}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h6 className="h6 tag">Business</h6>
                <h2 className="h2 title">
                  Ep 2: Getting the first 100 customers for your business
                </h2>
                <p className="info">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle. By the same illusion which lifts the horizon
                </p>
                <div className="btn-wrap">
                  <Link to="/" className="cta-btn cta-btn-primary">
                    Listen Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="single-podcast-inner-wrap section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="h2 title">
                  A podcast for makers and entrepreneurs
                </h2>
                <p className="info">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p className="info">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </p>

                <h3 className="h3">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black
                </h3>
                <p className="info">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <ul className="ul">
                  <li>we both celebrate and challenge</li>
                  <li>
                    the culture around us as we orient our lives around Jesus
                  </li>
                  <li>we want to help you take that next step</li>
                </ul>
                <p className="info">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <div className="blockquote-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="content">
                        <img
                          src={avatarImg}
                          alt="avatar"
                          width={64}
                          height={64}
                        />
                        <h3 className="h3 name">Eve Madien</h3>
                        <p className="designation">Producer & Art Director</p>
                        <ul className="social-links">
                          <li>
                            <Link to="/">
                              <img src={fb} alt="icon" width={16} height={16} />
                            </Link>
                          </li>

                          <li>
                            <Link to="/">
                              <img
                                src={link}
                                alt="icon"
                                width={16}
                                height={16}
                              />
                            </Link>
                          </li>

                          <li>
                            <Link to="/">
                              <img src={ig} alt="icon" width={16} height={16} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="info">
                        <p>
                          Recusandae ea placeat sit rerum quidem enim sed.
                          Voluptas aut adipisci autem in sint. Doloremque omnis
                          dolor fuga consectetur commodi repellendus molestiae
                          voluptatibus dolorum. Non quae est velit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="social-media-sticky">
                  <h3 className="h3 title">Listen on</h3>
                  <ul className="links">
                    {Footer_Logo_Dark.map((item, index) => {
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
              </div>
            </div>
          </div>
        </div>
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

export default Singlepodcast;
