import AnimatedCursor from "react-animated-cursor";
const AnimatedCursorSetup = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
  );
};

export default AnimatedCursorSetup;
