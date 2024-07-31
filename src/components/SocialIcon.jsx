import Icon from "@mdi/react";
import { useState } from "react";

const SocialIcon = ({ icon, toolTip }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <div
        className="group"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {" "}
        <span className="w-10 h-10 bg-primary group-hover:bg-secondary rounded-full grid place-items-center transition-all">
          <Icon
            path={icon}
            size="28px"
            className="group-hover:text-primary transition-all"
          />
        </span>
      </div>
      {visible && (
        <span className="absolute top-0 left-12 bg-secondary text-primary py-[2px] px-1 rounded text-[14px]">
          <span className="relative">
            <span className="absolute after:content-[''] top-1/2 translate-y-[-50%] ml-[-18px] border-[8px] border-l-transparent border-t-transparent border-b-transparent border-r-secondary "></span>
            {toolTip}
          </span>
        </span>
      )}
    </div>
  );
};

export default SocialIcon;
