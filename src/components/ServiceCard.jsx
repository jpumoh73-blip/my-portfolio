import { motion } from "framer-motion";
import "../css/ServiceCard.css";

function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index} className="service-feature">
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default ServiceCard;