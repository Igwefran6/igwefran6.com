import Header from "../components/layouts/Header";
import IntroContainer from "../components/layouts/IntroContainer";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import ScrolldownMssg from "../components/ScrolldownMssg";
import { mdiGithub, mdiFacebook, mdiTwitter } from "@mdi/js";
import Bubble from "../components/layouts/Bubbles";
import { useScrollContext } from "../hooks/useScrollContext";

const Home = () => {
  const { dispatch } = useScrollContext();
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden relative bg-transparent">
        <Header />
        <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col gap-3 max-lg:hidden">
          <SocialIcon
            icon={mdiGithub}
            toolTip="github"
            url="https://github.com/igwefran6"
          />
          <SocialIcon
            icon={mdiFacebook}
            toolTip="facebook"
            url="https://web.facebook.com/profile.php?id=61552677885908&sk=about"
          />
          <SocialIcon
            icon={mdiTwitter}
            toolTip="twitter"
            url="https://x.com/igwefran6"
          />
        </div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          {" "}
          <IntroContainer />
          <div className="m-auto w-fit mt-4 ">
            <Button dispatch={dispatch} type="project" text="My Projects" />
          </div>
        </div>
        <div className="absolute right-8 bottom-[120px] translate-x-1/2 max-lg:hidden">
          <ScrolldownMssg />
        </div>
      </div>
      <Bubble />
    </>
  );
};

export default Home;
