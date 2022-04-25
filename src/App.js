import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./css/header.css";
import "./css/style.css";
import "./css/media.css";
import Scrolltotop from "./components/Scrolltotop";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Scrolltotop />
        <AnimatedRoutes/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
