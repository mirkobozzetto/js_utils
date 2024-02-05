import React, { useEffect, useState } from "react";

const Button = ({ text }) => {
  const [isActive, setIsActive] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showAfterDelay, setShowAfterDelay] = useState(false);

  useEffect(() => {
    let timer; // Déclare le timer ici
    if (isActive) {
      timer = setTimeout(() => {
        setShowAfterDelay(true);
      }, 1000);
    } else {
      setShowAfterDelay(false);
    }

    return () => clearTimeout(timer);
  }, [isActive]);

  const toggleClass = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setDisplayText("");
    }
  };

  return (
    <>
      <button
        className={`p-4 font-bold ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
        onClick={toggleClass}
      >
        {text}
      </button>
      {showAfterDelay && <p>{displayText || "Ton contenu ici"}</p>}
    </>
  );
};

export default Button;
