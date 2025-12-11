import type { Timeline } from "../types";

export const experiences: Record<string, Timeline[]> = {
  work: [
    {
      name: ".NET Developer Intern, AKABI",
      location: "Itzig, Luxembourg",
      from: "Jan 2023",
      to: "Jun 2023",
      highlights: [
        "Developed <b>ERP billing module</b> with automated bill generation",
        "Implemented <b>temporal data versioning</b> for historical accuracy (IBAN, BIC...)",
        "Extended code coverage from <b>82% to 95%</b> through comprehensive unit testing",
        "Enhanced <b>database initialization scripts</b> for schema changes and data migrations",
      ],
      tags: [
        { name: "C#" },
        { name: ".NET" },
        { name: "SQL" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Azure Devops" },
      ],
    },
  ],
  education: [
    {
      name: "42 School, 42 Luxembourg",
      location: "Esch-sur-Alzette, Luxembourg",
      from: "Feb 2024",
      to: "Present",
      description: "Self-directed learning through peer to peer collaboration and hands-on projects",
    },
    {
      name: "Bachelor in Applied Information Technology, University of Luxembourg",
      location: "Esch-sur-Alzette, Luxembourg",
      from: "Sep 2019",
      to: "Jun 2023",
      description: "Foundation in computer science, software development, and IT systems",
    },
  ],
};
