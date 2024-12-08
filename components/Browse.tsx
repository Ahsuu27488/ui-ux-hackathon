import React from "react";

const Browse = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center pt-10 max-md:pt-2 ">
      <h1 className="font-poppins text-3xl font-bold text-[#333333] max-md:text-xl">
        Browse The Range
      </h1>
      <h1 className="pb-10 font-poppins text-[#666666] max-md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="flex gap-3 max-md:flex-col max-md:gap-6 max-md:px-6">
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img src="/images/browse1.png" alt="Picture" />
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Dining
          </h1>
        </div>
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img src="/images/browse2.png" alt="Picture" />
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Living
          </h1>
        </div>
        <div className="w-[381px] h-[480px] rounded-md flex justify-center items-center flex-col gap-5">
          <img src="/images/browse3.png" alt="Picture" />
          <h1 className="font-semibold text-[#333333] text-2xl max-md:text-xl">
            Bedroom
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Browse;
