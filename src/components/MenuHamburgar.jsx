import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

const MenuHamburgar = () => {
  return (
    <div className="p-2">
      {" "}
      <Icon
        path={mdiMenu}
        size="24px"
        className="active:scale-105 transition-all"
      />
    </div>
  );
};

export default MenuHamburgar;
