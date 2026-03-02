import "./About.css";
import aboutImg from "../assets/about.png";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>

        <div className="about-content">
  <h4>About Me</h4>
  <h2>I Build Modern Web & Python Applications</h2>

  <p>
    I am a B.Tech 2025 graduate passionate about Web Development and
    Python-based application development. I enjoy creating responsive,
    user-friendly interfaces and building backend logic that powers
    scalable applications.
  </p>

  <p>
    I have worked on full-stack projects using React, JavaScript,
    REST APIs, and Python. My focus is on writing clean, maintainable
    code and developing practical solutions that solve real-world problems.
  </p>

  <p>
    With a strong foundation in frontend technologies and Python
    programming, I continuously improve my skills by building
    hands-on projects and exploring modern development practices.
  </p>
</div>

      </div>
    </section>
  );
}

export default About;