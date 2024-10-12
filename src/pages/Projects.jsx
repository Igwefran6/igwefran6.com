const projects = [
  {
    title: "Dictle",
    imgURL: "/images/Dictle-img.png",
    placeholderImage: "/images/Dictle-img-sm.webp",
    alt: "Dictle",
    text: "Dictle is a dictionary app designed to provide users with quick and easy access to definitions, synonyms, antonyms, and example sentences for any word. The app is designed with simplicity and efficiency in mind, making it an ideal tool for students, writers, and anyone looking to expand their vocabulary.",
    technologies: ["ReactJs", "Tailwind", "Vercel"],
    repoURL: "https://github.com/Igwefran6/dictle",
    websiteURL: "https://dictle.vercel.app",
  },
  {
    title: "Colormath",
    imgURL: "/images/Colormath-img.png",
    placeholderImage: "/images/Colormath-img-sm.webp",
    alt: "ColorMath",
    text: "Test your math skills and color recognition in this exciting game! In ColorMath, you'll be presented with a series of math problems and colorful options to choose from. Simply select the correct answer that matches the math problem, and get ready to advance to the next level! But be careful.",
    technologies: ["ReactJs", "Tailwind", "Vercel"],
    repoURL: "https://github.com/Igwefran6/colormath",
    websiteURL: "https://colormath.vercel.app",
  },
  {
    title: "24Eatups",
    imgURL: "/images/24Eatups-img.png",
    placeholderImage: "/images/24Eatups-img-sm.webp",
    alt: "24Eatups",
    text: "Welcome to 24Eatups one of my first websites! Created using HTML, CSS, and JavaScript. The sleek, modern website offers a full menu and is hosted on GitHub Pages.",
    technologies: ["HTML5", "CSS3", "SASS", "Webpack", "Github-pages"],
    repoURL: "https://github.com/Igwefran6/Restaurant-",
    websiteURL: "https://igwefran6.github.io/Restaurant-/",
  },
];

const Project = () => {
  return (
    <div className="w-screen bg-secondary lg:px-20 px-14 p-10">
      <h1 className="text-4xl text-primary">Some of My Work</h1>
      <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-lg p-5 bg-[#1a1a1a] lg:hover:scale-105 transition-all lg:hover:shadow-xl"
          >
            <img
              src={project.imgURL}
              alt={project.alt}
              className="rounded-lg mb-4 border-4 border-secondary"
            />
            <h2 className="text-2xl font-bold mb-2 text-primary">
              {project.title}
            </h2>
            <p className="mb-4 text-primary opacity-75">{project.text}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-200 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.repoURL}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repo
              </a>
              <a
                href={project.websiteURL}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
