import Header from "../components/layouts/Header";
import IntroContainer from "../components/layouts/IntroContainer";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import ScrolldownMssg from "../components/ScrolldownMssg";
import { mdiGithub, mdiFacebook, mdiTwitter } from "@mdi/js";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
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
      <div className="fixed right-8 bottom-40 translate-x-1/2 ">
        <ScrolldownMssg />
      </div>
    </div>
  );
};

export default Home;
