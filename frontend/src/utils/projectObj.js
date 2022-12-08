import style from "../componentStyles/Description.module.css";
import CThomeImage from "./Photos/codeTheoryHome.png";
import CTmenuImage from "./Photos/codeTheoryMenu.png";
import CTsortImage from "./Photos/codeTheorySort.png";
import srbHome from "./Photos/srbHome.png";
import srbAdd from "./Photos/srbAdd.png";
import srbCards from "./Photos/srbCards.png";

const projectObj = [
  {
    id: 0,
    name: "Code Theory",
    tech: " (JavaScript, React, Node, Express, Axios, PostgreSQL, GitLab, figma)",
    link: "https://gitlab.com/m7093/frontend-capstone/-/tree/main",
    graphics: [CThomeImage, CTmenuImage, CTsortImage],
    info: (
      <div className={style.lists}>
        <h3>
          Full-Stack application to help software engineers store useful links
          that help with development.
        </h3>
        <ul>
          <li>
            Collaborated closely with a team of six engineers to design and
            implement innovative solutions for algorithmic learning with a
            front-end development web application.
          </li>
          <li>
            Participated in Front-end Design and state management using ReactJS,
            while troubleshooting foundational application bugs and handling
            ticket management in a GitLab workflow.
          </li>
          <li>
            Designed and diagnosed NodeJS and Express HTTP server and queries
            for data delivery between a PostgreSQL database and ReactJS
            front-end for user comments.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    name: "SRB (software resource buddy)",
    tech: " (JavaScript, React, Node, Express, Axios, PostgreSQL, GitLab, figma)",
    link: "https://github.com/pmdevlin/Software-Resource-Buddy-SRB-",
    graphics: [srbHome, srbCards, srbAdd],
    info: (
      <div className={style.lists}>
        <h3>
          Developed a Full-Stack app to help visually represent sorting
          algorithms.
        </h3>
        <ul>
          <li>
            Worked solo to design and implement solutions for the best way to
            catalog learning materials with a front-end development web
            application.
          </li>
          <li>
            Handled frontend and backend design. Implementing bug fixes and
            troubleshooting from database creation, server standup and frontend
            style.
          </li>
          <li>
            Diagnosed all issus that arose as well as cultivation of new ways of
            using NodeJS and express for simple web application.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    name: "Cazador",
    tech: "(JavaScript, React, Node, Express, Axios, PostgreSQL, GitLab, figma, docker)",
    link: "https://gitlab.com/m7093/blue-ocean",
    graphics: [],
    info: (
      <div className={style.lists}>
        <h3>
          Developed a Full-Stack app to improve job tracking between job seekers
          and recruiters.
        </h3>
        <ul>
          <li>
            Engineered a full stack application with a team of developers to
            design, create, and deploy an open-source web application with a
            custom authentication and authorization system.
          </li>
          <li>
            Designed and implemented a drag and drop board using ReactJS,
            ReactDND, and object-oriented programing (OOP), to allow ease of use
            for users and an enhanced UI experience.
          </li>
          <li>
            Assisted in database design, data queries, server implementation,
            front-end design, state management, and GitLab and GitHub Workflow
            management.
          </li>
        </ul>
      </div>
    ),
  },
];

export default projectObj;
