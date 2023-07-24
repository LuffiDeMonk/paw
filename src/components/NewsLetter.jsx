import React from "react";

import NewsletterImg from "../assets/Newsletter.png";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <section className="my-20 relative lg:px-4 h-[328px] w-full">
      <img src={NewsletterImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-24 text-[#F5FAFA]">
        <p className="text-sm lg:text-[20px] font-[600]">
          One More Friend Thousands More Fun!
        </p>
        <h1 className="text-lg lg:text-[34px] font-[900] mt-4 lg:mt-8 mb-12">
          "Find your furry soulmate at Our Pet Shop."
        </h1>
        <Button
          buttonText={"Get Now"}
          buttonColor={"bg-[#F5FAFA]"}
          textColor={"text-[#FF960C]"}
          iconColor={"text-[#F5FAFA]"}
          iconBackground={"bg-[#FF960C]"}
        />
      </div>
    </section>
  );
};

export default NewsLetter;
