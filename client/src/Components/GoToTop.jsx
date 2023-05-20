import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../CSS/GoToTop.css";

const GoToTop = () => {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      {toTopButton && (
        <div className="top-btn">
          <button onClick={scrollUp}>
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default GoToTop;
