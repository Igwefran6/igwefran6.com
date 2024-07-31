const DropdownButton = ({ text }) => {
  return (
    <div className="flex gap-2 group no-copy">
      <button className="bg-primary text-secondary py-1 px-4 rounded-3xl cursor-pointer transition-all group-hover:bg-secondary group-hover:text-primary ">
        {text}
      </button>
      <div className="bg-primary text-secondary h-8 w-8 rounded-full cursor-pointer transition-all group-hover:bg-secondary group-hover:text-primary group-active:scale-105 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>
    </div>
  );
};

export default DropdownButton;
