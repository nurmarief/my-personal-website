"use client"

import Link from "next/link";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import FrontendMentor from "@/components/icons/FrontendMentor";
import ContentSection from "./components/ContentSection";
import TechnicalSkillList from "./components/TechnicalSkillList";
import projectData from "../data/projects";
import ProjectCard from "./components/ProjectCard";

const technicalSkillList = [
  ["HTML", "CSS", "Javascript"],
  ["SASS", "Typescript"],
  ["Tailwind CSS", "Reactjs"],
  ["Node JS"],
  ["Express JS"],
  ["Next JS"],
  ["Mongo DB"],
  ["Git"],
];

const Home = () => {
  return (
    <main>
      {/* Container */}
      <div className="max-w-screen-2xl min-h-screen mx-auto px-4 md:px-10 lg:px-20 py-10 lg:py-20 block lg:grid lg:grid-cols-12">
        {/* Left */}
        <div className="col-span-4">
          {/* Container */}
          <div className="pb-10 sticky top-0 space-y-8">
            {/* Profile section */}
            <section>
              <h1 className="my-4 text-5xl leading-tight tracking-wider font-bold">Nur Muhammad Arief Kurniawan</h1>
              <p className="my-4 text-3xl font-normal">Fullstack Web Developer</p>
              <p className="tracking-wider italic">Enthusiastic self taught developer seeking to start a career in building web based applications.</p>
            </section>
            {/* Content List */}
            <nav className="hidden lg:block"> 
              <ul className="flex flex-wrap gap-4 text-2xl">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#skills">Technical Skills</Link></li>
                <li><Link href="#projects">Projects</Link></li>
              </ul>
            </nav>
            {/* Contact */}
            <div className="flex gap-8">
              <Link href="https://github.com/nurmarief/" about="Github profile" target="_blank" className="text-3xl text-gray-300 hover:text-white">
                <Github />
              </Link>
              <Link href="https://www.linkedin.com/in/nur-muhammad-arief-kurniawan/" about="LinkedIn profile" target="_blank" className="text-3xl text-gray-300 hover:text-white">
                <LinkedIn />
              </Link>
              <Link href="https://www.frontendmentor.io/profile/nurmarief" about="Frontendmentor.io profile" target="_blank" className="text-3xl text-gray-300 hover:text-white">
                <FrontendMentor />
              </Link>
            </div>
          </div>
        </div>
        {/* Gap */}
        <div className="col-span-1"></div>
        {/* Right */}
        <div className="col-span-7">
          {/* About section */}
          <ContentSection id="about" title="About">
            <p>I am a self taught fullstack web developer, based in Jakarta, Indonesia. Up to this point, I solely focused on Javascript based technology for both frontend and backend development. During the process, I also built several exercise projects to implement my knowledge that I have gained so far.</p>
            <p>I believe an expertise can be achieved through continuous learning, collaborating, and practising. Regarding that, currently, I am looking forward to be a part of an amazing developer team in an actual web development industry.</p>
          </ContentSection>
          <ContentSection id="skills" title="Technical Skills">
            <TechnicalSkillList skills={technicalSkillList} />
          </ContentSection>
          {/* Projects section */}
          <ContentSection id="projects" title="Projects">
            {projectData.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imgUrl={project.imgUrl}
                repoUrl={project.repoUrl}
                LiveSiteUrl={project.liveSiteUrl}
              />
            ))}
          </ContentSection>
        </div>
      </div>
    </main>
  );
};

export default Home;
