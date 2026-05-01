import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      {/* 🔹 Project 1 */}
      <div className="project-row">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
            alt="Phishing Detection"
          />
        </div>

        <div className="project-content">
          <h3>Phishing Website Detection System</h3>
          <p>
            Engineered a Python-based phishing detection system for URL
            classification. Performed feature engineering and evaluated
            machine learning models achieving 86%+ accuracy.
          </p>

          <p>
            Integrated real-time email alerts using SMTP and applied
            backend logic for web-based deployment.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>SQL</span>
            <span>SMTP</span>
          </div>
        </div>
      </div>

      {/* 🔹 Project 2 */}
      <div className="project-row reverse">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Library Management"
          />
        </div>

        <div className="project-content">
          <h3>Full Stack Library Management System</h3>
          <p>
            Built a responsive web application using React.js and REST APIs.
            Implemented role-based authentication for Admin and User.
          </p>

          <p>
            Managed 100+ book records with secure CRUD operations and
            seamless frontend–backend integration.
          </p>

          <div className="tech-stack">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>REST API</span>
            <span>HTML & CSS</span>
          </div>
        </div>
      </div>

      {/* 🔹 Project 3 (NEW) */}
      <div className="project-row">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc"
            alt="Resume Analyzer"
          />
        </div>

        <div className="project-content">
          <h3>Resume Score Analyzer</h3>

          <p>
            Developed a web-based resume analysis tool that evaluates resumes
            using keyword matching and scoring algorithms.
          </p>

          <p>
            Applied text processing techniques to compare resumes with job
            descriptions and provide actionable feedback to improve ATS scores.
          </p>

          <div className="tech-stack">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Text Processing</span>
            <span>Algorithm Logic</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;