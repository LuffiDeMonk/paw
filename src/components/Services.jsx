import React from "react";

import ServiceOne from "../assets/services/ServiceOne.png";
import ServiceTwo from "../assets/services/ServiceTwo.png";
import ServiceThree from "../assets/services/ServiceThree.png";
import ServiceFour from "../assets/services/ServiceFour.png";
import ServiceFive from "../assets/services/ServiceFive.png";
import ServiceSix from "../assets/services/ServiceSix.png";

const ServiceData = [
  {
    id: 1,
    title: "Dog/Cat Gromming",
    content:
      "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
    image: ServiceOne,
  },
  {
    id: 2,
    title: "Home Treatment",
    content:
      "Our goal is to ensure pet welfare through home treatment and prompt client response.",
    image: ServiceTwo,
  },
  {
    id: 3,
    title: "Clinical Treatment",
    content:
      "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
    image: ServiceThree,
  },
  {
    id: 4,
    title: "Puppies Buying & Selling",
    content:
      "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
    image: ServiceFour,
  },
  {
    id: 5,
    title: "Dog Training",
    content:
      "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
    image: ServiceFive,
  },
  {
    id: 6,
    title: "Dog Matting",
    content:
      "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
    image: ServiceSix,
  },
];

const Button = () => {
  return (
    <div className="w-24 h-8 flex items-center justify-center rounded-md text-[12px] font-[600] text-white bg-[#17224D] shadow-sm cursor-pointer">
      Show More
    </div>
  );
};

const ServiceCard = ({ data }) => {
  return (
    <div className="w-full max-h-[530px] overflow-hidden space-y-6 border border-gray-200 rounded-[14px] pb-5">
      <img src={data?.image} alt="" className="w-full" />
      <div className="px-5 flex flex-col gap-6 xl:gap-1 justify-center">
        <h2 className="font-[800] text-[20px] text-[#17224D] lg:max-h-[66px] xl:min-h-[47px]">
          {data?.title}
        </h2>
        <p className="text-[14px] font-[500] min-h-[64px]">{data?.content}</p>
        <div className="flex justify-center items-center h-16">
          <Button />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mx-10 space-y-12 mb-8">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-[45px] font-[800] text-center">
          Our Services
        </h1>
        <p className="text-xl lg:text-[24px] font-[500] text-center leading-[32px]">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12">
        {ServiceData?.map((item) => (
          <ServiceCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
