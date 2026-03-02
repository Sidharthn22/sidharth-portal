import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">

        <div className="home-content">
          <h3>I'm</h3>
          <h1>Sidharth N</h1>

          <h2 className="role">
            <div className="role-wrapper">
              <span>Aspiring Data Analyst</span>
              <span>Frontend Developer</span>
            </div>
          </h2>

          <div className="home-buttons">
            <a href="./sid resume.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
            <button className="btn-outline">Contact Me</button>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Home;