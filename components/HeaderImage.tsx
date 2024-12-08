import Link from "next/link";
import React from "react";


const HeaderImage = () => {
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
    </div>
  );
};

export default HeaderImage;
