import Header from "../components/layouts/Header";
import IntroContainer from "../components/layouts/IntroContainer";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import ScrolldownMssg from "../components/ScrolldownMssg";
import { mdiGithub, mdiFacebook, mdiTwitter } from "@mdi/js";
import AnimatedCursorSetup from "../components/layouts/AnimatedCursorSetup";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden relative bg-background">
      <Header />
      <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col gap-3 max-lg:hidden">
        <SocialIcon icon={mdiGithub} toolTip="github" />
        <SocialIcon icon={mdiFacebook} toolTip="facebook" />
        <SocialIcon icon={mdiTwitter} toolTip="twitter" />
      </div>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        {" "}
        <IntroContainer />
        <div className="m-auto w-fit mt-4 ">
          <Button text="My Projects" />
        </div>
      </div>
      <div className="absolute right-8 bottom-[120px] translate-x-1/2 max-lg:hidden">
        <ScrolldownMssg />
      </div>
      <AnimatedCursorSetup />
    </div>
  );
};

export default Home;
