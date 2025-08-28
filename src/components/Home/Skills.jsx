import React from "react";
const AllSkills = [
  {
    id: 5,
    name: "Core Fundamental Skills",
    skills: [
      "Data Structures and Algorithms",
      "Database Management Systems (DBMS)",
      "Computer Networking",
      "Operating System",
      "Linux",
      ,
    ],
  },
  {
    id: 1,
    name: "Front-End Development",
    skills: ["ReactJS", "Redux", "HTML/CSS", "Next.js"],
  },
  {
    id: 2,
    name: "Back-End Development",
    skills: ["Node.js", "Express", "SQL",, "MongoDB", "Prisma"],
  },
  
  {
    id: 4,
    name: "Programming Languages and Tools",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "Git"],
  },
  {
    id: 3,
    name: "Cloud and DevOps",
    skills: [
      "AWS",
      "Docker",
      "Serverless",
      "Vercel",
      "Kubernetes",
      "Jenkins",
    ],
  },
  
];

const Skills = () => {
  return (
    <>
      <section className="text-gray-600 max-w-screen-xl mx-auto body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-10">
          <h2 class="max-w-2xl mb-10 text-center mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-white">
           <span class="text-indigo-700">About</span> Me        </h2>
            <p className="text-base leading-relaxed xl:w-5/5 lg:w-4/5 mx-auto">
              As a dedicated and passionate software engineer, I thrive on
              leveraging my diverse technical skill set to solve complex
              problems and create innovative solutions. My experience spans
              various domains, from front-end development to back-end
              engineering, cloud computing, and DevOps. I am proficient in a
              range of programming languages and frameworks, and I continuously
              seek to expand my knowledge and stay updated with the latest
              industry trends. My skills are categorized as follows:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {AllSkills.map((skill) => {
              return (
                <div key={skill.id} className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                  <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                    {skill.name}
                  </h2>
                  <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                    {skill.skills.map((particularSkill) => {
                      return (
                        <a>
                          <span className="bg-blue-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          {particularSkill}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              );
            })}
        
          </div>
          <a href="/Vansh279_Resume.pdf" download className="flex text-center mx-auto mt-9 w-56 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Skills;
