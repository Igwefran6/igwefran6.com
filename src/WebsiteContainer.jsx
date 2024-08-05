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
      <div className="">
        <Home />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <Project />
      </div>
      <div className="">
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default WebContainer;
