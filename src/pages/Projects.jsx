import ProjectCard from "../components/layouts/ProjectCard";
const Project = () => {
  return (
    <div className="min-h-screen w-screen bg-secondary px-20 pt-12">
      <h1 className="text-4xl text-primary ">Projects</h1>
      <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
      <div className="">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
