
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

function NotFound() {
  return (
    <section className="not-found">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="not-found-label">ERROR 404</span>

        <h1>
          4<span>0</span>4
        </h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          Looks like this page has disappeared into the digital universe.
          Let's get you back to my portfolio.
        </p>

        <Link to="/" className="not-found-button">
          <FaHouse />
          Back to Home
        </Link>

        <Link
          to="/"
          className="not-found-back"
          aria-label="Return to homepage"
        >
          <FaArrowLeft />
          Return to safety
        </Link>
      </motion.div>

      <div className="not-found-glow" aria-hidden="true" />
    </section>
  );
}

export default NotFound;
