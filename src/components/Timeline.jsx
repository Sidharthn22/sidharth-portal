import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Education & Experience</h2>

      <div className="timeline-container">

    
        <div className="timeline-column">
          <h3>My Education</h3>

          <div className="timeline-item">
            <h4>B.Tech in Computer Science & Business Systems</h4>
            <span>
              JCT College of Engineering and Technology, Anna University
              | 2021 - 2025
            </span>
            <p>
              Focused on full-stack web development, Python programming,
              database management, and software engineering fundamentals.
            </p>
          </div>

          <div className="timeline-item">
            <h4>Higher Secondary (XII)</h4>
            <span>
              Indira Gandhi Public School, CBSE | 2020 - 2021
            </span>
            <p>
              Strengthened analytical thinking and computer science
              fundamentals.
            </p>
          </div>

          <div className="timeline-item">
            <h4>Secondary School (X)</h4>
            <span>
              Army Public School, CBSE | 2018 - 2019
            </span>
            <p>
              Built strong academic foundation with exposure to
              structured learning and discipline.
            </p>
          </div>
        </div>


        <div className="timeline-column">
          <h3>My Experience</h3>

          <div className="timeline-item">
            <h4>Python Full Stack Developer Intern</h4>
            <span>QSpiders | 07/2025 - 12/2025</span>
            <p>
              Built full-stack web applications using React.js and Django.
              Designed REST APIs for authentication and CRUD operations.
              Worked with MySQL databases and collaborated using Git & GitHub.
            </p>
          </div>

          
        </div>

      </div>
    </section>
  );
}

export default Timeline;