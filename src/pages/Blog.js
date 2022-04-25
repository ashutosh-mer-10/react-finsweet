import React from "react";
import { Link } from "react-router-dom";
import Bloglist from "../components/Bloglist";
import Ctabanneone from "../components/Ctabanneone";
import BlogImg from "../images/blog-banner-img.png";
import { motion } from "framer-motion";

const Blog = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, transition: { duration: 0.5 } }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className="blog-banner-wrap banner-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content">
                  <h6 className="h6 tag">Featured</h6>
                  <h1 className="h1 title">
                    Should I raise money for my startup, or not?
                  </h1>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                  <div className="btn-wrap">
                    <Link to="/singleblog" className="cta-link fw-bold">
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={BlogImg} alt="sec-img" width={615} height={448} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-wrapper">
          <Bloglist title="All Blogs" />
          <Ctabanneone />
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
