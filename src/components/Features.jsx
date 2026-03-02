import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="features-container">

        <div className="feature-card">
          <div className="icon red">🎯</div>
          <h3>Pixel Perfect</h3>
          <p>
            Clean, structured and responsive layouts designed
            with precision and attention to detail.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon green">💻</div>
          <h3>High Quality</h3>
          <p>
            Optimized and scalable applications built with
            modern technologies and best practices.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon yellow">💡</div>
          <h3>Awesome Ideas</h3>
          <p>
            Problem-solving mindset with creative thinking
            and innovative implementation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;