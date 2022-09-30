import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiPostgresql } from "react-icons/si";
const skills = [
  {
    name: "JavaScript",
    percentage: "80%",
    logo: <IoLogoJavascript />,
  },
  {
    name: "Java",
    percentage: "45%",
    logo: <FaJava />,
  },
  {
    name: "HTML",
    percentage: "90%",
    logo: <FaHtml5 />,
  },
  {
    name: "CSS",
    percentage: "90%",
    logo: <SiCss3 />,
  },

  {
    name: "React",
    percentage: "80%",
    logo: <FaReact />,
  },
  {
    name: "Node",
    percentage: "75%",
    logo: <FaNode />,
  },
  {
    name: "Postgresql",
    percentage: "70%",
    logo: <SiPostgresql />,
  },
];

export default skills;
