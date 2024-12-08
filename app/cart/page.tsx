import React from "react";
import Link from "next/link";
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
          <h1 className="font-semibold text-5xl text-black">Cart</h1>
          <p className="font-light text-lg text-black flex gap-4">
            <span className="font-medium">
              <Link href="/">Home</Link>
            </span>{" "}
            / <span className="">Cart</span>
          </p>
        </div>
      </div>
      <div className="px-24 py-24 flex gap-8 max-sm:flex-col max-sm:px-5 max-sm:py-8">
        <div className="">
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-5 bg-[#F9F1E7] py-4 px-10 font-medium text-[16px] max-sm:text-[14px] max-sm:grid-cols-4">
              <h1></h1>
              <h1 className="">Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1 className="max-sm:hidden">Subtotal</h1>
            </div>
            <div className="grid grid-cols-5 py-4 px-10 font-normal text-[16px] text-[#9F9F9F] items-center max-sm:text-[14px] max-sm:grid-cols-4">
              <div>
                <img
                  src="/images/cartproduct.png"
                  alt="Product"
                  className="w-full max-sm:w-16"
                />
              </div>
              <h1 className="">Asgaard Sofa</h1>
              <h1>Rs. 250,000.00</h1>
              <h1 className="bg-transparent border border-gray-500 p-1 pl-2 w-8 h-8 rounded-lg max-sm:w-6 max-sm:h-6">
                1
              </h1>
              <h1 className="text-black flex gap-7 items-end max-sm:text-[12px]">
                Rs. 250,000.00{" "}
                <img
                  src="/images/icons/bin.png"
                  alt="delete"
                  className="max-sm:w-4"
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F1E7] py-10 px-6 gap-6 flex flex-col justify-center items-center w-[40%] max-sm:w-full max-sm:py-6 max-sm:px-4">
          <h1 className="font-semibold text-[32px] max-sm:text-[24px]">
            Cart Tools
          </h1>
          <div className="flex items-center justify-between gap-20 max-sm:gap-4 max-sm:text-[14px]">
            <h1 className="text-[16px] font-medium">Subtotal</h1>
            <h1 className="text-[16px] text-[#9F9F9F]">Rs. 250,000.00</h1>
          </div>
          <div className="flex items-center justify-between gap-20 max-sm:gap-4 max-sm:text-[14px]">
            <h1 className="text-[16px] font-medium">Total</h1>
            <h1 className="text-[20px] font-medium text-[#B88E2F] max-sm:text-[16px]">
              Rs. 250,000.00
            </h1>
          </div>
          <button className="text-[20px] bg-transparent border border-black rounded-xl w-52 h-14 max-sm:w-40 max-sm:h-12">
            <a href="/checkout">Check Out</a>
          </button>
        </div>
      </div>
      <div className="bg-[#FAF3EA] mt-16">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 px-14 py-28  items-center scale-90 gap-12 max-sm:scale-100 max-sm:py-14 max-sm:px-7">
          <img src="/images/service1.png" alt="Services" />
          <img src="/images/service2.png" alt="Services" />
          <img src="/images/service3.png" alt="Services" />
          <img src="/images/service4.png" alt="Services" />
        </div>
      </div>
    </div>
  );
};

export default page;
