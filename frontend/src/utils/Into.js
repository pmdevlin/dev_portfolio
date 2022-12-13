import style from "../styles/About.module.css";

const intro = {
  intro: (
    <>
      <h2 className={style.introTitle}>About Me</h2>
      <ul className={style.introUl}>
        <li className={style.introLi}>
          Hello! My name is Paul Devlin. I am a full stack software engineer,
          United States Marine Corp and Army veteran, plus a husband to my
          beautiful wife and father of two amazing little girls.
        </li>
        <li className={style.introLi}>
          I started my interest in software engineering during college where I
          completed 3 years of college level education ranging from exercise
          science, mathematics, and computer science. During my studies I
          decided to join the army to help offset costs and gain some leadership
          experience. Upon Completion of my military career, I was offered an
          opportunity to continue my studies in software engineering. I was able
          to participate in a 5-month software engineering immersion program
          focused in full stack application fluency in the PERN stack. During
          this training I became fluent in; JavaScript, CSS, HTML, React, SQL,
          PostgreSQL, Node, Express, Agile Methodologies, software design, and
          some back-end web development. This school drastically improved my
          programming ability and analytical skills.
        </li>
        <li className={style.introLi}>
          Shortly after I was able to secure a position with Booz Allen Hamilton
          as a software engineer. Sense being at the company I decided to go a
          different direction because of the company’s needs. They allowed me to
          attend a DevSecOps engineering program. The program skills focused on
          Kubernetes, Docker, AWS EKS Clusters, AWS EC2, GitLab Admin,
          Fundamentals of Platform engineering, GitOps with Flux, GitOps with
          ArgoCD, Harbor, Helm and many observability services. I have learned a
          lot during this course and look forward work in the DevOps community.{" "}
        </li>
        <li className={style.introLi}>
          I love to learn new things and push myself forward. I served in the
          military for a total of 8 years. I have learned many things from the
          experience but the two that have become my core values are enriching
          others through leadership, and a constant growth mindset. I have found
          that giving others the opportunity to achieve and come out of their
          shells became my focus in my many leadership positions. Everyone has
          something to offer and keeping the growth mindset everything is
          attainable. I love to bring my energy to a group and see what we can
          accomplish.{" "}
        </li>
        <li className={style.introLi}>
          I am super excited to gain as much experience as possible. I am
          looking for more to join my community that will help me improve and
          grow my understanding of people and technology. Thank you for reading
          my bio feel free to reach out for help, advice, offers, or a friendly
          conversation.
        </li>
      </ul>
    </>
  ),
};

export default intro;
