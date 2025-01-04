import React from "react";
import Image from "next/image";

const Browse = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center pt-10 max-md:pt-4 px-4 md:px-0">
      <h1 className="font-poppins text-3xl font-bold text-[#333333] text-center max-md:text-xl">
        Browse The Range
      </h1>
      <h1 className="pb-10 font-poppins text-[#666666] text-center max-md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <Image width={381} height={480} src="/images/browse1.png" alt="Dining" />
          <h1 className="font-semibold text-[#333333] text-2xl text-center max-md:text-xl">
            Dining
          </h1>
        </div>
        <div className="w-full h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <Image width={381} height={480} src="/images/browse2.png" alt="Living" />
          <h1 className="font-semibold text-[#333333] text-2xl text-center max-md:text-xl">
            Living
          </h1>
        </div>
        <div className="w-full h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <Image width={381} height={480} src="/images/browse3.png" alt="Bedroom" />
          <h1 className="font-semibold text-[#333333] text-2xl text-center max-md:text-xl">
            Bedroom
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Browse;
