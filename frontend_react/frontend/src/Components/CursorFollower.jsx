import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to update cursor position
  const handleMouseMove = (event) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Add event listener to track mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "blue",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none", // Ensures the div doesn't interfere with other elements
      }}
      animate={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

export default CursorFollower;
