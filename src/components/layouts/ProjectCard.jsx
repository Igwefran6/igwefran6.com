const ProjectCard = () => {
  return (
    <div className="flex flex-row h-auto pb-4 opacity-85 hover:opacity-90">
      <div className="w-[35%] bg-slate-800 p-8 text-primary">
        <h2 className="text-2xl mb-4">Dictle</h2>
        <p className="pr-4">
          Dictle is a dictionary app designed to provide users with quick and
          easy access to definitions, synonyms, antonyms, and example sentences
          for any word. The app is designed with simplicity and efficiency in
          mind, making it an ideal tool for students, writers, and anyone
          looking to expand their vocabulary.
        </p>
        <div className="flex gap-2 flex-wrap">
          {" "}
          <span className="p-2 py-1 my-2 border border-primary inline-block">
            ReactJS
          </span>
          <span className="p-2 py-1 my-2 border border-primary inline-block">
            Tailwind
          </span>
          <span className="p-2 py-1 my-2 border border-primary inline-block">
            Vercel
          </span>
        </div>
        <div className=" flex gap-2 flex-wrap">
          <button className="p-2 py-1 my-2 border border-primary inline-block w-[45%] hover:bg-primary hover:text-secondary active:scale-105 font-semibold">
            Demo
          </button>
          <button className="p-2 py-1 my-2 border border-primary inline-block w-[45%] hover:bg-primary hover:text-secondary active:scale-105 font-semibold">
            Visit
          </button>
        </div>
      </div>
      <div className="w-[65%] flex items-center ">
        <img
          src="../../src/assets/images/Dictle-img.png"
          alt="Project"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
