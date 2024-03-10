import React, { FC } from "react";

interface iButton {
  text: string;
}

const Button: FC<iButton> = ({ text }) => {
  return (
    <div>
      {" "}
      <button className="btn rounded-[40px] bg-gradient-to-r from-[#6d62aa] hover:to-[#6d62aa] hover:from-[#2ab2d2] transition-all duration-300 to-[#2ab2d2] text-white border-none shadow-lg text-[18px] px-5 ">
        {text}
      </button>
    </div>
  );
};

export default Button;
