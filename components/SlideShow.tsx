import Link from "next/link";
import React from "react";

const SlideShow = () => {
  return (
    <div className="bg-[#FCF8F3] pl-[100px] py-[70px] grid grid-cols-7 max-sm:grid-cols-1 justify-center max-sm:px-[50px] max-sm:py-[20px]">
      <div className="col-span-2 max-sm:pb-5">
        <div className="flex flex-col gap-3 justify-center items-start">
          <h1 className="font-bold text-[40px] text-[#3A3A3A max-sm:text-[25px]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-medium text-[16px] text-[#616161]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="pt-12 max-sm:w-[330px]">
            <Link href="/shop">
              <button className="bg-[#B88E2F] border border-[#B88E2F] w-60 h-12 font-semibold text-lg max-sm:font-medium text-[#FFFFFF] l">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-5 max-sm:overflow-x-auto max-sm:overflow-y-hidden">
        <div className="flex gap-5 justify-start items-start relative">
          <img src="/images/design1.png" alt="Design" className="" />
          <div className="translate-x-6 -translate-y-6 absolute bg-[#FFFFFFB8] opacity-70 bottom-0 flex justify-center items-center py-7 px-5 flex-col">
            <img src="/images/index.png" alt="" />
            <h1 className="font-poppins font-semibold text-[28px] text-[#3A3A3A]">
              Inner Peace
            </h1>
          </div>
          <button className="absolute bottom-0 -translate-y-6 translate-x-[222px] bg-[#B88E2F] w-12 h-12 flex justify-center items-center opacity-100">
            <img src="/images/icons/arrowright.png" alt="arrowsvg" />
          </button>

          <div className="">
            <img src="/images/design3.png" alt="Design" className="absolute" />
            <img
              src="/images/buttons.png"
              alt="Switch Styles"
              className="absolute bottom-0 -translate-y-12 max-sm:translate-y-[1px]"
            />
            <img src="/images/design2.png" alt="Design" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
