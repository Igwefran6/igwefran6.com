import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

const WebContainer = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default WebContainer;
