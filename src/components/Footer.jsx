import React from "react";

import { IoPawSharp } from "react-icons/io5";

import FooterOne from "../assets/footer/Footer1.png";
import FooterTwo from "../assets/footer/Footer2.png";
import FooterThree from "../assets/footer/Footer3.png";
import FooterFour from "../assets/footer/Footer4.png";

import SocialIcon from "../assets/footer/SocialIcon.png";

const FooterLinks = ["Home", "About", "Services", "Breeds", "Shop", "Contact"];

const FooterImages = [
  {
    image: FooterOne,
  },
  {
    image: FooterTwo,
  },
  {
    image: FooterThree,
  },
  { image: FooterFour },
];

const Footer = () => {
  return (
    <section className="h-full bg-[#17224D] p-10 md:p-20 text-white space-y-20">
      <div className="flex xl:justify-between flex-col xl:flex-row gap-12">
        <div className="basis-40 space-y-10">
          {/* logo component */}
          <div className="xl:min-h-[150px] flex xl:items-center justify-between gap-2 xl:gap-10">
            <div className="basis-1/2 md:basis-[148px] shrink-0 flex items-center justify-center">
              <div className="w-[90px] h-[32px] text-center flex items-center justify-center font-[900] text-[25px] uppercase leading-none gap-1">
                paw <IoPawSharp />
              </div>
            </div>
            <p className="h-full text-[13px] md:text-[18px] font-[500] basis-1/2 shrink-0 lg:min-w-[338px]">
              "City Pet House & Animal Clinic: Quality and affordable animal
              care at your doorstep. Comprehensive, professional, and
              compassionate veterinary services by our dedicated and experienced
              team."
            </p>
          </div>
          <div className="flex md:flex-col md:gap-10 gap-8">
            {/* phone number */}
            <div className="space-y-2 h-[53px]">
              <p className="text-[12px] md:text-[18px] font-[400]">
                Phone Number:
              </p>
              <h4 className="text-[12px] md:text-[20px] font-[700]">
                +977-9861859764
              </h4>
            </div>
            <div className="space-y-2 h-[53px]">
              <p className="text-[12px] md:text-[18px] font-[400]">Location:</p>
              <h4 className="text-[12px] md:text-[20px] font-[700]">
                Tahachal-Kathmandu
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between basis-1/2 shrink-0">
          {/* menu section */}
          <div className="space-y-10 basis-1/2 shrink-0">
            <h3 className="text-[14px] md:text-[20px] font-[700]">Menu</h3>
            <ul className="space-y-3">
              {FooterLinks?.map((item, index) => (
                <li
                  className="text-[12px] md:text-[18px] font-[400] cursor-pointer"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Gallery Section */}
          <div className="space-y-10 basis-1/2 shrink-0">
            <h3 className="text-[14px] md:text-[20px] font-[700]">Gallery</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-2 w-full sm:w-[120px] lg:w-[200px]">
              {FooterImages?.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-[#D4D2E3]"></div>
      <div className="flex flex-col xl:flex-row items-center md:justify-between text-white gap-5 xl:gap-0">
        <p className="text-[18px] font-[400] text-center md:text-start">
          Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved
        </p>
        <img src={SocialIcon} alt="" className="w-fit h-fit object-cover" />
      </div>
    </section>
  );
};

export default Footer;
