import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Host from "../pages/Host";
import Podcasts from "../pages/Podcasts";
import Singlepodcast from "../pages/Singlepodcast";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Singleblog from "../pages/Singleblog";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation;
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/single-podcast" element={<Singlepodcast />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleblog" element={<Singleblog />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
