import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/layouts/Footer";
Footer;

const WebContainer = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebContainer;
