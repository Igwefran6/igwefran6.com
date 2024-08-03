import ProjectCard from "../components/layouts/ProjectCard";
const Project = () => {
  return (
    <div className="min-h-screen w-screen bg-secondary px-20 pt-12">
      <h1 className="text-4xl text-primary ">Projects</h1>
      <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
      <div className="">
        <ProjectCard
          title="Dictle"
          imgURL="../../src/assets/images/Dictle-img.png"
          text="Dictle is a dictionary app designed to provide users with quick and
          easy access to definitions, synonyms, antonyms, and example sentences
          for any word. The app is designed with simplicity and efficiency in
          mind, making it an ideal tool for students, writers, and anyone
          looking to expand their vocabulary."
          technologies={["ReactJs", "Tailwind", "Vercel"]}
          demoURL="#"
          websiteURL="#"
        />
      </div>
    </div>
  );
};

export default Project;
