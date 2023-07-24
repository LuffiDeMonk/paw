import React from "react";

import CollectionOne from "../assets/collection/Collection1.png";
import CollectionTwo from "../assets/collection/Collection2.png";
import CollectionThree from "../assets/collection/Collection3.png";
import CollectionFour from "../assets/collection/Collection4.png";
import CollectionFive from "../assets/collection/Collection5.png";
import CollectionSix from "../assets/collection/Collection6.png";
import CollectionSeven from "../assets/collection/Collection7.png";
import CollectionEight from "../assets/collection/Collection8.png";
import Button from "./Button";

const CollectionData = [
  {
    id: 1,
    title: "Golden Retriever",
    gender: "male",
    age: "2 months",
    image: CollectionOne,
  },
  {
    id: 2,
    title: "Doberman",
    gender: "male",
    age: "2 months",
    image: CollectionTwo,
  },
  {
    id: 3,
    title: "Apso",
    gender: "female",
    age: "1 year",
    image: CollectionThree,
  },
  {
    id: 4,
    title: "Chihuahua",
    gender: "female",
    age: "1 year",
    image: CollectionFour,
  },
  {
    id: 5,
    title: "Japanese Spitz",
    gender: "male",
    age: "2 months",
    image: CollectionFive,
  },
  {
    id: 6,
    title: "German Shepard",
    gender: "male",
    age: "2 months",
    image: CollectionSix,
  },
  {
    id: 7,
    title: "Husky",
    gender: "female",
    age: "3 months",
    image: CollectionSeven,
  },
  {
    id: 8,
    title: "Pug",
    gender: "female",
    age: "4 months",
    image: CollectionEight,
  },
];

const CollectionCard = ({ data }) => {
  return (
    <div className="w-full max-h-[360px] rounded-[12px] p-2 border border-[#D4D2E3] space-y-2">
      <img
        src={data?.image}
        alt=""
        className="w-full h-[264px] object-cover rounded-[12px]"
      />
      <h3 className="text-[12px] md:text-[16px] font-[800] text-[#17224D]">
        {data?.title}
      </h3>
      <div className="flex flex-row gap-2 sm:gap-8 md:gap-6">
        <h4 className="text-[8px] sm:text-[10px] md:text-[12px] font-[400]">
          Gender:
          <span className="ml-1 font-[800] capitalize">{data?.gender}</span>
        </h4>
        <h4 className="text-[8px] sm:text-[10px] md:text-[12px] font-[400]">
          Age:
          <span className="ml-1 font-[800] capitalize">{data?.age}</span>
        </h4>
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <section className="md:mx-10 lg:mx-24 space-y-12 mt-24 md:mt-36">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-[45px] font-[800] text-center">
          Our Pet Collections
        </h1>
        <p className="text-lg lg:text-[24px] font-[500] text-center">
          "Bring joy to your home with a furry companion from our pet
          selection."
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:px-8">
        {CollectionData?.map((item) => (
          <CollectionCard data={item} key={item.title} />
        ))}
      </div>
      <div className="h-20 flex justify-center items-center">
        <Button buttonText={"View All"} />
      </div>
    </section>
  );
};

export default Collection;
