import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-start items-center relative pb-[700px] max-md:pb-[230px]">
        <Image
          width={1440}
          height={718}
          src="/images/hero-bg.png"
          alt="hero-image"
          className="absolute top-0 w-full"
        />
        <div className="absolute top-48 right-0 bg-[#FFF3E3] rounded-[10px] w-[600px] h-[460px] max-md:w-[160px] max-md:h-[120px] flex flex-col justify-start items-start gap-10 max-md:gap-2 py-16 px-8 max-md:px-4 max-md:py-0 -translate-x-16 -translate-y-12 max-md:-translate-x-10 max-md:-translate-y-36 max-md:scale-110">
          <div className="flex flex-col gap-10 max-md:gap-[2px]">
            <h1 className="font-poppins font-semibold text-lg max-md:text-[8px]">
              New Arrival
            </h1>
            <h1 className="font-poppins font-bold text-5xl text-[#B88E2F] max-md:text-[11px]">
              Discover Our New Collection
            </h1>
            <h1 className="font-medium font-poppins md:text-[16px] text-[6px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt maxime officiis doloribus velit.
            </h1>
            <Link href="/shop">
              <button className="font-bold font-poppins text-lg max-md:text-[6px] bg-[#B88E2F] text-white w-56 h-16 max-md:w-12 max-md:h-5 flex justify-center items-center max-md:font-semibold">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
