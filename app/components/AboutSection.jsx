"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React js</li>
        <li>Next js</li>
        <li>Redux</li>
        <li>Firebase</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Material UI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Telecom Foundation School System school degree, Computer science
          2021-2022
        </li>
        <li>
          Jamia Milia Computer Science College High school degree, Computer
          science 2023-2024 (expected)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Creative Coder | CS First From Google (16/11/2020)</li>
        <li>Javascript Programming From OpenWeaver (30/2/23)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="w-full h-full hidden md:block lg:block"
          src="/images/aboutimg.avif"
          width={500}
          height={500}
          alt="Aboutimg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, React, Redux, Firebase and Git.
            I am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
