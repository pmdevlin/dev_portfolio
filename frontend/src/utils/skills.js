import style from "../componentStyles/Skill.module.css";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";

const skills = [
  {
    type: "HTML",
    percent: 90,
    logo: (
      <div>
        <FaHtml5 />
      </div>
    ),
  },
  {
    type: "CSS",
    percent: 90,
    logo: (
      <div>
        <FaCss3Alt />
      </div>
    ),
  },
  {
    type: "JavaScript",
    percent: 95,
    logo: (
      <div>
        <SiJavascript />
      </div>
    ),
  },
  {
    type: "Java",
    percent: 45,
    logo: (
      <div>
        <FaJava />
      </div>
    ),
  },
  {
    type: "React",
    percent: 85,
    logo: (
      <div>
        <FaReact />
      </div>
    ),
  },
  {
    type: "Node",
    percent: 75,
    logo: (
      <div>
        <FaNode />
      </div>
    ),
  },
  {
    type: "Postgresql",
    percent: 70,
    logo: (
      <div>
        <SiPostgresql />
      </div>
    ),
  },
];

export default skills;
