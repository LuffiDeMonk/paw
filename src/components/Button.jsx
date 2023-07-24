import React from "react";

import { AiOutlineRight } from "react-icons/ai";

const Button = ({
  buttonText,
  buttonColor,
  textColor,
  iconBackground,
  iconColor,
}) => {
  return (
    <button
      className={`w-[161px] h-12 ${
        buttonColor ? buttonColor : "bg-[#007FFF]"
      } ${
        textColor ? textColor : " text-white"
      } rounded-full flex items-center relative`}
    >
      <span className="text-[15px] font-[600] pl-6">{buttonText}</span>
      <div
        className={`w-[32px] h-[32px] rounded-full ${
          iconBackground ? iconBackground : "bg-white"
        } ${
          iconColor ? iconColor : "text-[#007FFF]"
        } absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center text-[10px] font-[600]`}
      >
        <AiOutlineRight />
      </div>
    </button>
  );
};

export default Button;
