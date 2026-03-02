import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">

    
        <a 
          href="mailto:sidharth22n@gmail.com" 
          className="contact-card"
          aria-label="Send Email"
        >
          <div className="icon-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email Icon"
            />
          </div>
          <span>sidharth22n@gmail.com</span>
        </a>

    
        <a 
          href="tel:+918891829408" 
          className="contact-card"
          aria-label="Call Phone"
        >
          <div className="icon-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt="Phone Icon"
            />
          </div>
          <span>+91 88918 29408</span>
        </a>

  
        <a
          href="https://github.com/Sidharthn22"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="Visit GitHub Profile"
        >
          <div className="icon-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub Icon"
            />
          </div>
          <span>github.com/Sidharthn22</span>
        </a>

    
        <a
          href="https://linkedin.com/in/sidharth-n22"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="Visit LinkedIn Profile"
        >
          <div className="icon-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Icon"
            />
          </div>
          <span>linkedin.com/in/sidharth-n22</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;