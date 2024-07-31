import Header from "../components/layouts/Header";
import IntroContainer from "../components/layouts/IntroContainer";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        {" "}
        <IntroContainer />
        <div className="m-auto w-fit mt-4">
          <Button text="My Projects" />
        </div>
      </div>
    </div>
  );
};

export default Home;
