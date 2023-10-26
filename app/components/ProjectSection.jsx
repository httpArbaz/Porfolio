"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Uber Clone",
    description:
      " am thrilled to present my latest project which i make with the NextJS and Tailwind CSS, an Uber clone app.",
    image: "/images/projects/uber.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/Uber-Clone-Responsive",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description:
      "I build an eCommerce project using Next.js and Tailwind CSS. The goal of the project was to build a modern and responsive e-commerce store that was fast and easy to use.",
    image: "/images/projects/ecommerce.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/Shopping-Website/tree/main",
  },
  {
    id: 3,
    title: "Facebook Clone",
    description:
      "I created a Facebook clone using React.js, and I designed the styles myself.",
    image: "/images/projects/social.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/FaceBook-Clone",
  },
  {
    id: 4,
    title: "Disney+ Clone",
    description:
      "In This Project I Use React + Redux And Fire Base For Google Authentication !",
    image: "/images/projects/dashboard.jpg",
    image: "/images/projects/disney.jpg",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://github.com/httpArbaz/Disney-clone-react-redux-firebase-styled-component-.git",
  },
  {
    id: 5,
    title: "Tesla Clone",
    description:
      "I dove into building a Tesla Clone using ReactJS . To manage the state of the application efficiently, I implemented Redux , For the styling part, I chose Styled Components.",
    image: "/images/projects/tesla.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/Tesla-Clone",
  },
  {
    id: 6,
    title: "DashBoard",
    description:
      "I'm thrilled to present my latest project, a cutting-edge dashboard app designed to empower businesses with actionable insights and streamlined data management.",
    image: "/images/projects/dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/httpArbaz/nextjs-dashboard",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-red-700">
          My Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
