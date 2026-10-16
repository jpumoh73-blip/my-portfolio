import {
  FaCode,
  FaMobileScreenButton,
  FaPalette,
  FaBolt
} from "react-icons/fa6";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Modern & responsive websites and web apps"
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Interactive & dynamic user interfaces"
  },
  {
    icon: <FaMobileScreenButton />,
    title: "UI/UX Design",
    text: "Clean, modern & user-friendly designs"
  },
  {
    icon: <FaBolt />,
    title: "Problem Solving",
    text: "Creative solutions for real challenges"
  }
];

function Services() {
  return (
    <section className="section services" id="services">

      <div className="container services-container">

        <div className="services-intro">

          <span className="eyebrow">
            WHAT I DO
          </span>

          <h2>
            Turning Ideas Into Reality
          </h2>

          <p>
            I build modern web applications that are fast,
            responsive and user-friendly.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;