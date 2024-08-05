import ProjectCard from "../components/layouts/ProjectCard";

const Project = () => {
  return (
    <div className=" w-screen bg-secondary lg:px-20 px-14 pt-10">
      <h1 className="text-4xl text-primary ">Some of My Work</h1>
      <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
      <div>
        <ProjectCard
          title="Dictle"
          imgURL="/images/Dictle-img.png"
          placeholderImage="/images/Dictle-img-sm.webp"
          alt="Dictle"
          text="Dictle is a dictionary app designed to provide users with quick and
          easy access to definitions, synonyms, antonyms, and example sentences
          for any word. The app is designed with simplicity and efficiency in
          mind, making it an ideal tool for students, writers, and anyone
          looking to expand their vocabulary."
          technologies={["ReactJs", "Tailwind", "Vercel"]}
          repoURL="https://github.com/Igwefran6/dictle"
          websiteURL="https://dictle.vercel.app"
        />
        <ProjectCard
          title="Colormath"
          imgURL="/images/Colormath-img.png"
          placeholderImage="/images/Colormath-img-sm.webp"
          alt="ColorMath"
          text="Test your math skills and color recognition in this 
          exciting game! In ColorMath, you'll be presented with a series
           of math problems and colorful options to choose from. 
           Simply select the correct answer that matches the math problem, 
           and get ready to advance to the next level! But be careful."
          technologies={["ReactJs", "Tailwind", "Vercel"]}
          repoURL="https://github.com/Igwefran6/colormath"
          websiteURL="https://colormath.vercel.app"
        />
        <ProjectCard
          title="24Eatups"
          imgURL="/images/24Eatups-img.png"
          placeholderImage="/images/24Eatups-img-sm.webp"
          alt="24Eatups"
          text="Welcome to 24Eatups one of my first websites! Created using HTML, CSS, 
          and JavaScript. The website sleek, modern website offers a 
          full menu. It's Hosted on GitHub Pages."
          technologies={["HTML5", "CSS3", "SASS", "Webpack", "Github-pages"]}
          repoURL="https://github.com/Igwefran6/Restaurant-"
          websiteURL="https://igwefran6.github.io/Restaurant-/"
        />
      </div>
    </div>
  );
};

export default Project;
