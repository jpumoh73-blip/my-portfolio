import { useState } from "react";
import "../css/Contact.css";

function Contact() {
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

    // Replace this with your WhatsApp number
    const phone = "2348125374873";

    const text = `Hello Phinehas John,

Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    // Clear the form after opening WhatsApp
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        Interested in working together? Feel free to send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
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

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;