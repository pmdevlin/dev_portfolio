import style from "../componentStyles/Description.module.css";
import CThomeImage from "./Photos/codeTheoryHome.png";
import CTmenuImage from "./Photos/codeTheoryMenu.png";
import CTsortImage from "./Photos/codeTheorySort.png";
// import srbHome from "./Photos/srbHome";
// import srbAdd from "./Photos/srbAdd";
// import srbCards from "./Photos/srbCards";

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
          Developed a Full-Stack app to help visually represent sorting
          algorithms.
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
    // graphics: [srbHome, srbCards, srbAdd],
    info: (
      <div className={style.lists}>
        <h3>
          Developed a Full-Stack app to help visually represent sorting
          algorithms.
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
    id: 2,
    name: "Blue Ocean",
    info: "this is a temp body description",
  },
];

export default projectObj;
