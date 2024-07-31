import Button from "../Button";
import DropdownButton from "../DropdownButton";
const Navigation = () => {
  return (
    <div className="flex gap-2">
      <Button text="About" />
      <Button text="Contact" />
      <DropdownButton text="More" />
    </div>
  );
};

export default Navigation;
