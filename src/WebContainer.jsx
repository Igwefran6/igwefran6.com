import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import AnimatedCursorSetup from "./components/layouts/AnimatedCursorSetup";

const WebContainer = () => {
  return (
    <div className="overflow-x-hidden">
      <AnimatedCursorSetup />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default WebContainer;
