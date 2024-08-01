import myImage from "../assets/images/my-image.jpg";
import AnimatedCursorSetup from "../components/layouts/AnimatedCursorSetup";

const About = () => {
  return (
    <>
      <AnimatedCursorSetup />

      <div className="h-screen w-screen overflow-x-hidden flex max-lg:block">
        <div className="lg:w-2/3  lg:h-screen bg-primary p-20 relative">
          <h1 className="text-5xl font-semibold">Hello,</h1>
          <p className="mt-4 text-[18px] font-semibold">
            I'm Igwe Chimezie Francis, or just Francis. I focus on creating
            beautiful, user-friendly web experiences through clean code.
          </p>
          <hr className="w-24 border-t-4 my-4 border-text-orange" />
          <p>
            I'm a fourth year student at Nnamdi Azikiwe University. I have a
            background in crafting and refining web solutions, ranging from
            sleek, simple landing pages to complex progressive web applications.
            My goal is to build software that not only operates seamlessly but
            also delivers a user experience that’s both intuitive and visually
            stunning.
          </p>
          <br />
          <p>
            <span className="font-semibold">
              I’m passionate about exploring innovative ways to enhance user
              experiences through clean, effective, and scalable code.
            </span>
            To me, work is a continuous journey of learning and growth, and I
            thrive in environments where knowledge is shared and collaborative
            problem-solving is encouraged.
          </p>
          <br />
          <p>
            <span className="font-semibold">
              When I'm not in front of a computer screen
            </span>
            , you’ll likely find me playing chess, discovering new animes,
            reading, exploring new technologies and trying out random apps that
            I'll eventually uninstall.
          </p>
          <span className="font-semibold text-6xl">&lt;/&gt;</span>
        </div>
        <div className="lg:w-1/2 h-screen bg-secondary p-8 grid place-items-center">
          <div className="w-[300px] h-[300px] bg-primary rounded-full overflow-hidden border-8 border-primary">
            <img src={myImage} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
