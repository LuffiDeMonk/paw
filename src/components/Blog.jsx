import React from "react";

import Button from "./Button";

import BlogOne from "../assets/blog/BlogImage1.png";
import BlogTwo from "../assets/blog/BlogImage2.png";
import BlogThree from "../assets/blog/BlogImage3.png";

const BlogData = [
  {
    id: 1,
    title: "How to Choose the Right Bully Stick for Your Dog",
    image: BlogOne,
  },
  {
    id: 2,
    title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
    image: BlogTwo,
  },
  {
    id: 3,
    title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
    image: BlogThree,
  },
];

const BlogCard = ({ data }) => {
  return (
    <div className="w-full max-h-[830px] xl:max-h-[800px] overflow-hidden space-y-6 rounded-[14px] pb-5">
      <img src={data?.image} alt="" className="w-full" />
      <div className="flex flex-col gap-10 xl:gap-4 justify-center">
        <h2 className="font-[700] text-[18px] text-[#17224D] max-h-[47px]">
          {data?.title}
        </h2>
        <p className="text-[14px] font-[400] min-h-[49px] mb-2">
          Below is an excerpt of porch.com article “ Moving with Pets? We have
          the Experts advice to do it Properly.
        </p>
        <div className="w-24 h-8 flex items-center justify-center rounded-md text-[12px] font-[600] text-white bg-[#17224D] shadow-sm cursor-pointer">
          View Details
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="md:mx-10 lg:mx-24 my-12 lg:mb-48 mt-24 space-y-32 md:mt-36">
      <h1 className="text-3xl lg:text-[45px] font-[800] text-center">
        Our Blogs
      </h1>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 lg:px-12">
        {BlogData?.map((item) => (
          <BlogCard data={item} key={item.image} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
