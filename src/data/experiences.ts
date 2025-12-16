import type { Timeline } from "../types";

export const experiences: Record<string, Timeline[]> = {
  work: [
    {
      name: ".NET Developer Intern",
      organization: "AKABI",
      location: "Itzig, Luxembourg",
      from: "Jan 2023",
      to: "Jun 2023",
      logo: {
        path: "/experiences/akabi-logo.png",
        alt: "AKABI company logo",
      },
      highlights: [
        "Developed <b>ERP billing module</b> with automated bill generation",
        "Implemented <b>temporal data versioning</b> for historical accuracy (IBAN, BIC...)",
        "Extended code coverage from <b>82% to 95%</b> through extensive unit testing",
        "Enhanced <b>database initialization scripts</b> for schema changes and data migrations",
      ],
      tags: [
        { name: "C#", icon: "devicon:csharp" },
        { name: ".NET", icon: "logos:dotnet" },
        { name: "MySQL", icon: "devicon:mysql" },
        { name: "HTML", icon: "devicon:html5" },
        { name: "CSS", icon: "devicon:css3" },
        { name: "JavaScript", icon: "devicon:javascript" },
        { name: "Azure Devops", icon: "devicon:azuredevops" },
      ],
    },
  ],
  education: [
    {
      name: "42 School",
      organization: "42 Luxembourg",
      location: "Esch-sur-Alzette, Luxembourg",
      from: "Feb 2024",
      to: "Present",
      logo: {
        path: "/experiences/42-logo.png",
        alt: "42 Luxembourg logo",
      },
      description:
        "Self-directed <b>peer-to-peer learning</b> program focused on <b>problem-solving</b> and real-world <b>software development</b> through <b>hands-on projects</b>. I learned to work <b>autonomously</b> as well as in <b>teams</b>, organize my own learning, maintain <b>rigorous coding practices</b>, and quickly adapt to new <b>technologies</b> and <b>project constraints</b>.",
    },
    {
      name: "Bachelor in Applied Information Technology",
      organization: "University of Luxembourg",
      location: "Esch-sur-Alzette, Luxembourg",
      from: "Sep 2019",
      to: "Jun 2023",
      logo: {
        path: "/experiences/university-of-luxembourg-logo.png",
        alt: "University of Luxembourg logo",
      },
      description:
        "Foundation in <b>computer science</b>, <b>software development</b>, and <b>IT systems</b>. I learned core <b>programming</b> and <b>software engineering</b>, <b>algorithms</b> and <b>databases</b>, as well as basic <b>networking</b>, <b>operating systems</b> and <b>data science</b> concepts.",
    },
  ],
};
