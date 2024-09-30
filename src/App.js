import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import ServicePage from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
