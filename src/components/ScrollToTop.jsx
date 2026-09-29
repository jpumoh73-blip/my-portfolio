import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../css/ScrollToTop.css";

function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggle = () => {

      setVisible(window.scrollY > 300);

    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);

  }, []);

  return (

    visible && (

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >

        <FaArrowUp />

      </button>

    )

  );

}

export default ScrollToTop;