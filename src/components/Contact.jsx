
import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  // Replace these with your actual details
  const whatsappNumber = "2348125374873";
  const githubUsername = "jpumoh73-blip";
  const linkedinUsername = "linkedin.com/in/john-peter-0385482bb";
  const emailAddress = "jpumoh73@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello! I'm contacting you through your portfolio.

Name: ${formData.name}
Email: ${formData.email}

Project details:
${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project in mind? Let's turn your idea
            into something amazing.
          </p>

          <div className="social-links">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href={`https://www.linkedin.com/in/${linkedinUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${emailAddress}`}
              aria-label="Email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
