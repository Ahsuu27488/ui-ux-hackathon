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
          <h1 className="font-semibold text-5xl text-black">Checkout</h1>
          <p className="font-light text-lg text-black flex gap-4">
            <span className="font-medium">
              <Link href="/">Home</Link>
            </span>{" "}
            / <span className="">Checkout</span>
          </p>
        </div>
      </div>
      <div className="px-[120px] py-[80px] grid grid-cols-2 max-sm:grid-cols-1">
        <div>
          <h1 className="font-bold text-4xl pb-10">Billing Details</h1>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="first-name"
                className="text-[16px] text-black font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your first name"
                className="h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="text-[16px] text-black font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                className="h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
              />
            </div>
          </div>
        </div>
        <div>Bank details</div>
      </div>
    </div>
  );
};

export default page;
