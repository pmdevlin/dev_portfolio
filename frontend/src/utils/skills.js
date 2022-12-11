import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";

const skills = [
  {
    type: "HTML",
    percent: 90,
    logo: (
      <div>
        <FaHtml5 size={22} />
      </div>
    ),
  },
  {
    type: "CSS",
    percent: 90,
    logo: (
      <div>
        <FaCss3Alt size={22} />
      </div>
    ),
  },
  {
    type: "JavaScript",
    percent: 95,
    logo: (
      <div>
        <SiJavascript size={22} />
      </div>
    ),
  },
  {
    type: "Java",
    percent: 45,
    logo: (
      <div>
        <FaJava size={22} />
      </div>
    ),
  },
  {
    type: "React",
    percent: 85,
    logo: (
      <div>
        <FaReact size={22} />
      </div>
    ),
  },
  {
    type: "Node",
    percent: 75,
    logo: (
      <div>
        <FaNode size={22} />
      </div>
    ),
  },
  {
    type: "Postgresql",
    percent: 70,
    logo: (
      <div>
        <SiPostgresql size={22} />
      </div>
    ),
  },
];

export default skills;
