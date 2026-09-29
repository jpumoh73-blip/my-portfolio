import "../css/Services.css";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      text: "Modern and responsive websites built with React.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      text: "Websites optimized for desktop, tablet and mobile.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI Design",
      text: "Clean and user-friendly interfaces with modern styling.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;