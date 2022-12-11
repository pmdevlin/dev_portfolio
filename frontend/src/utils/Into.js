import style from "../styles/About.module.css";

const intro = {
  intro: (
    <>
      <h2 className={style.introTitle}>About Me</h2>
      <ul className={style.introUl}>
        <li className={style.introLi}>
          Hello! My name is Paul Devlin. My focus is constant growth in my
          developing skills. I am a full-stack developer with a passion for fast
          interactivity, intuitive designs, and pushing my limits. My desire to
          be a developer presented itself to me in a web development class in
          college.
        </li>
        <li className={style.introLi}>
          I started to learn C++, HTML, and CSS. I put these skills in my back
          pocket for later.
        </li>
        <li className={style.introLi}>
          I have severed 8 years in the United states armed forces between the
          army and the Marine corps. After my service I pursued my dream of
          becoming a developer. Fast-forward to today and I have the privilege
          of working for Booz Allen Hamilton. As a full-stack software
          developer. I cannot wait for what the future hold and all the projects
          I will be able to be apart of.
        </li>
      </ul>
    </>
  ),
};

export default intro;
