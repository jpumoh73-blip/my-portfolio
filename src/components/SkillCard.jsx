import { motion } from "framer-motion";
import "../css/SkillCard.css";

function SkillCard({ icon, name, level, category }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <div className="skill-card-top">
        <div className="skill-icon">{icon}</div>

        <span className="skill-category">{category}</span>
      </div>

      <h3>{name}</h3>

      {level && (
        <div className="skill-level">
          <div className="skill-level-info">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>

          <div className="skill-progress">
            <motion.div
              className="skill-progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default SkillCard;