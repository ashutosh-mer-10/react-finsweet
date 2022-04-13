import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import "./css/header.css";
import "./css/style.css";
import "./css/media.css";
import Host from "./pages/Host";
import Podcasts from "./pages/Podcasts";
import Singlepodcast from "./pages/Singlepodcast";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/host" element={<Host />} />
        </Routes>

        <Routes>
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>

        <Routes>
          <Route path="/single-podcast" element={<Singlepodcast />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
