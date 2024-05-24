import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youtube from "@/public/youtube.png";
import toDoList from "@/public/toDoList.png";
import calculator from "@/public/calc.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Instituto Tecnologico de Toluca",
    location: "Toluca, Mexico",
    description: "I graduated after 6 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2022",
  },
  {
    title: "Front-End Developer at Satori Tech",
    location: "Metepec, Mexico",
    description:
      "Design, Maintenance and Implementation of Web Solutions using React, JS, Bootstrap, HTML, CSS, PHP, SQL, Laravel",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer at Prompt Soluciones Integradas",
    location: "Metepec, Mexico",
    description:
      "Troubleshooting, Development and Maintenance ERP/CRM platform “EFFETools” using HTML, CSS, PHP, MySQL, JavaScript, Jquery and Bootstrap, .NET, C#, Razor Pages y Entity Framework.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "ToDo List with Zustand",
    description:
      "Simple ToDo List applying React fundamentals and Zustand for state management",
    tags: ["HTML", "CSS", "JavaScript", "React", "Zustand", "NPM"],
    imageUrl: toDoList,
    pageUrl: "https://conmutadornube.azurewebsites.net/",
  },
  {
    title: "Youtube Clone",
    description:
      "Replicated Youtube's UI using React and other state of the art web development tools",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: youtube,
    pageUrl: "https://youtube-clone-one-inky.vercel.app/?",
  },
  {
    title: "React Calculator",
    description:
      "Created a calculator app with proper logic using React and styling with Tailwind",
    tags: ["React", "Javascript", "Tailwind", "Vite"],
    imageUrl: calculator,
    pageUrl: "https://react-calculator-delta-ten.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "OOP",
  "Bootstrap",
  ".NET",
  "Entity Framework",
  "Git",
  "Github",
  "MySQL",
  "Java",
  "Framer Motion",
] as const;
