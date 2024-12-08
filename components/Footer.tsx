import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mx-4 md:mx-[100px] py-[50px] border-b border-b-gray-400">
        <div className="col-span-2 flex flex-col gap-4 md:gap-10">
          <h1 className="font-poppins font-bold text-lg md:text-2xl text-black">Furniro.</h1>
          <div>
            <h1 className="text-sm md:text-[16px] font-normal text-[#9F9F9F] font-poppins">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <h1 className="font-poppins font-normal text-[#9F9F9F] text-sm md:text-[16px]">Links</h1>
          <div className="text-sm md:text-[16px] font-medium font-poppins flex flex-col gap-2 md:gap-8">
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <h1 className="font-poppins font-normal text-[#9F9F9F] text-sm md:text-[16px]">Help</h1>
          <div className="text-sm md:text-[16px] font-medium font-poppins flex flex-col gap-2 md:gap-8">
            <h1>Payment Options</h1>
            <h1>Returns</h1>
            <h1>Privacy Policies</h1>
          </div>
        </div>
        <div className="col-span-2 flex-col flex gap-4 md:gap-10">
          <h1 className="font-poppins font-normal text-[#9F9F9F] text-sm md:text-[16px]">Newsletter</h1>
          <div className="flex gap-2 md:gap-4">
            <input
              placeholder="Enter Your Email Address"
              className=" w-40 border-b pb-1 border-b-black font-poppins font-normal text-sm md:text-[16px] text-[#9F9F9F] md:w-auto"
            />
            <h1 className="cursor-pointer">Subscribe</h1>
          </div>
        </div>
      </div>
      <h1 className="py-4 text-sm md:py-8 font-poppins px-4 md:px-[100px] font-normal text-sm md:text-[16px]">
        2023 Furniro. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
