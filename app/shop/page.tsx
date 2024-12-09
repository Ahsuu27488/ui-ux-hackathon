import MainProducts from "@/components/MainProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div className="max-sm:overflow-x-hidden overflow-x-clip">
      <div className="">
        <Image  width={1440} height={328} 
          src="/images/shop-bg.png"
          alt="banner"
          className="relative flex justify-center items-center blur-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
          <h1 className="font-semibold text-5xl text-black">Shop</h1>
          <p className="font-light text-lg text-black flex gap-4">
            <span className="font-medium">
              <Link href="/">Home</Link>
            </span>{" "}
            / <span className="">Shop</span>
          </p>
        </div>
      </div>
      <div className="bg-[#F9F1E7] px-24 flex items-center justify-between py-4 max-sm:py-1 max-sm:px-0 max-sm:justify-around max-sm:gap-5">
        <div className="flex items-center gap-4 max-sm:gap-2 max-sm:scale-50">
          <div className="text-[20px] flex items-center gap-2">
            <Image  width={21} height={18}  src="/images/icons/filter.png" alt="icon" className="size-5" />
            Filter
          </div>
          <div>
            <Image  width={28} height={28}  src="/images/icons/gridview.png" alt="listview" />
          </div>
          <div className="border-r border-r-gray-400 pr-3">
            <Image  width={24} height={24}  src="/images/icons/listview.png" alt="listview" />
          </div>
          <div className="text-lg ">Showing 12–38</div>
        </div>
        <div className="flex items-center text-[20px] gap-8 max-sm:gap-4 max-sm:scale-50">
          <div className="">
            Show{" "}
            <input
              type="number"
              placeholder="16"
              className="w-[50px]  placeholder-[#9F9F9F] py-2 pl-3 bg-[#FFFFFF]"
            />
          </div>
          <div className="">
            Sort By{" "}
            <input
              type="text"
              placeholder="Default"
              className="w-[178px]   placeholder-[#9F9F9F] py-2 pl-3 bg-[#FFFFFF]"
            />
          </div>
        </div>
      </div>
      <div className="pt-16 pb-16 max-sm:py-0">
        <MainProducts />
        <MainProducts />
        <MainProducts />
        <MainProducts />
      </div>
      <div className="flex gap-6 justify-center items-center">
        <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] h-14 w-14 p-1">
          1
        </button>
        <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] h-14 w-14 p-1">
          2
        </button>
        <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] h-14 w-14 p-1">
          3
        </button>
        <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] h-14 w-24 p-1">
          Next
        </button>
      </div>
      <div className="bg-[#FAF3EA] mt-16">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 px-14 py-28  items-center scale-90 gap-12 max-sm:scale-100 max-sm:py-14 max-sm:px-7">
          <Image  width={337} height={70}  src="/images/service1.png" alt="Services" />
          <Image  width={329} height={70}  src="/images/service2.png" alt="Services" />
          <Image  width={245} height={70}  src="/images/service3.png" alt="Services" />
          <Image  width={259} height={70}  src="/images/service4.png" alt="Services" />
        </div>
      </div>
    </div>
  );
};

export default page;
