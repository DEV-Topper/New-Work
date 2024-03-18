import React, { ButtonHTMLAttributes, FC, useState } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
}

const Button: FC<iButton> = ({ text, icon, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    borderRadius: "40px",
    background: "linear-gradient(to right, #6d62aa, #2ab2d2)", // Initial gradient background
    color: "white",
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    padding: "10px 20px",
    overflow: "hidden",
    transition: "background-color 0.5s",
  };

  const gradientStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to left, #6d62aa, #2ab2d2)",
    opacity: isHovered ? "1" : "0",
    transition: "opacity 0.5s",
    pointerEvents: "none",
    zIndex: "0", // Ensure the gradient is behind the text but above the button background
  };

  const textStyle = {
    position: "relative",
    zIndex: "1", // Ensure the text is displayed above the gradient
  };

  return (
    <div>
      <button
        {...props}
        className={twMerge("group", className)}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          style={textStyle}
          className="flex items-center gap-3 font-semibold"
        >
          {icon && (
            <div className="p-2 transition-all duration-500 text-[#6d62aa] group-hover:text-[#2ab2d2] bg-white rounded-full">
              {icon}
            </div>
          )}
          {text}
        </span>
        <div style={gradientStyle}></div>
      </button>
    </div>
  );
};

export default Button;
