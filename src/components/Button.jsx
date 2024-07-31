const Button = ({ text }) => {
  return (
    <button className="bg-primary condary py-1 px-4 rounded-3xl cursor-pointer hover:bg-secondary hover:text-primary active:scale-105 transition-all font-semibold text-[18px] no-copy border-[4px] border-button-boundary-color">
      {text}
    </button>
  );
};

export default Button;
