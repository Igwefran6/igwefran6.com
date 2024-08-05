import { useEffect } from "react";
const ProjectCard = ({
  title,
  imgURL,
  text,
  technologies,
  repoURL,
  websiteURL,
}) => {
  const gotoURL = (url) => {
    window.location.href = url;
  };
  return (
    <div className="flex-row h-auto pb-4 opacity-85 hover:opacity-90">
      <div className="flex items-center ">
        <img src={imgURL} alt="Project" className="w-full h-auto" />
      </div>
      <div className=" bg-slate-800 p-8 text-primary">
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="pr-4">{text}</p>
        <div className="flex gap-2 flex-wrap py-2">
          {technologies &&
            technologies.map((t, i) => {
              return (
                <span
                  key={i}
                  className="p-2 py-1 my-2 border border-primary inline-block"
                >
                  {t}
                </span>
              );
            })}
        </div>
        <div className=" flex gap-2 flex-wrap">
          <button
            onClick={() => gotoURL(repoURL)}
            className="p-2 py-1 my-2 border border-primary inline-block w-[45%] hover:bg-primary hover:text-secondary active:scale-105 font-semibold"
          >
            Repo
          </button>
          <button
            onClick={() => gotoURL(websiteURL)}
            className="p-2 py-1 my-2 border border-primary inline-block w-[45%] hover:bg-primary hover:text-secondary active:scale-105 font-semibold"
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
