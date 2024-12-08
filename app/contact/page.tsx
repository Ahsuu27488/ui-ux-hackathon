import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <img
          src="/images/shop-bg.png"
          alt="banner"
          className="relative flex justify-center items-center blur-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[195px] max-sm:scale-50">
          <h1 className="font-semibold text-5xl text-black">Contact</h1>
          <p className="font-light text-lg text-black flex gap-4">
            <span className="font-medium">
              <Link href="/">Home</Link>
            </span>{" "}
            / <span className="">Contact</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-24 py-16 max-sm:px-8 max-sm:py-8">
        <h1 className="font-bold text-4xl max-sm:text-xl">
          Get In Touch With Us
        </h1>
        <p className="text-lg max-sm:text-sm text-[#9F9F9F]  items-center px-80 max-sm:px-0 flex justify-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex justify-center items-center gap-52  max-sm:gap-3 max-sm:flex-col">
        <img src="/images/contacts.png" alt="Contact" />
        <div className=" flex flex-col gap-6 justify-start items-start">
          <label
            htmlFor=""
            className="text-[16px] text-black font-medium mb-1 mt-4"
          >
            Your Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=""
            className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px]   text-[16px] w-[400px] max-sm:w-[260px]  h pl-7"
          />
          <label
            htmlFor=""
            className="text-[16px] text-black font-medium mb-1 mt-4"
          >
            Email Address
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=""
            className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px]   text-[16px] w-[400px] max-sm:w-[260px]  h pl-7"
          />
          <label
            htmlFor=""
            className="text-[16px] text-black font-medium mb-1 mt-4"
          >
            Subject
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=""
            className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px]  text-[16px] w-[400px] max-sm:w-[260px]   h pl-7"
          />
          <label
            htmlFor=""
            className="text-[16px] text-black font-medium mb-1 mt-4"
          >
            Message
          </label>
          <fieldset
            id="last-name"
            className=" max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] w-[400px] max-sm:w-[260px]  h-32 pl-7"
          />
          <button className="bg-[#B88E2F] text-white w-52 h-12 rounded max-sm:w-full">Submit</button>
        </div>
      </div>
      
    </div>
  );
};

export default page;
