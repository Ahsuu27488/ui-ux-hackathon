import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="overflow-x-clip">
      <div>
        {" "}
        <div>
          <Image
            width={1440}
            height={328}
            src="/images/shop-bg.png"
            alt="banner"
            className="relative flex justify-center items-center blur-sm"
          />
          <div className="absolute inset-0 top-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
            <h1 className="font-semibold text-5xl text-black text-center">
              Product Comparision
            </h1>
            <p className="font-light text-lg text-black flex gap-4">
              <span className="font-medium">
                <Link href="/">Home</Link>
              </span>{" "}
              / <span className="">Compare</span>
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 px-16 max-sm:py-12 max-sm:px-8">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center max-sm:grid-rows-2 gap-14">
          <div className="max-sm:col-start-1 max-sm:row-start-2">
            <h1 className="font-medium text-[29px] max-sm:text-[18px]">
              Go to Product page for more Products
            </h1>
            <h1 className="text-[#727272] font-medium text-[20px] max-sm:text-[14px] pb-3 underline underline-offset-8 pt-8 max-sm:pt-4">
              View More
            </h1>
          </div>
          <div className="flex flex-col gap-[3px] max-sm:col-start-1 max-sm:row-start-1">
            <Image
              src="/images/compare-product1.png"
              alt="product1"
              width={280}
              height={177}
            />
            <h1 className="font-medium text-[24px]">Asgaard Sofa</h1>
            <h1 className="font-medium text-[18px]">Rs. 250,000.00</h1>
            <div className="flex gap-2 items-center justify-start">
              <h1 className="font-medium text-[18px]">4.7</h1>
              <Image
                src="/images/icons/stars.png"
                alt="stars"
                width={124}
                height={20}
              />
              <p className="text-[13px] text-[#9F9F9F] border-l border-l-gray-400 pl-2">
                204 Rating
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[3px] max-sm:col-start-2 max-sm:row-start-1 max-sm:scale-[.79] max-sm:-translate-x-10">
            <div className="bg-[#F9F1E7] rounded-[10px] flex w-[280px] h-[177px] max-sm:w-[250px] max-sm:scale-90">
              <Image
                src="/images/compare-product2.png"
                alt="product1"
                width={271}
                height={201}
                className="-translate-y-4 max-sm:scale-90"
              />
            </div>
            <h1 className="font-medium text-[24px]">Outdoor Sofa Set</h1>
            <h1 className="font-medium text-[18px]">Rs. 224,000.00</h1>
            <div className="flex gap-2 items-center justify-start">
              <h1 className="font-medium text-[18px]">4.2</h1>
              <Image
                src="/images/icons/stars.png"
                alt="stars"
                width={124}
                height={20}
              />
              <p className="text-[13px] text-[#9F9F9F] border-l border-l-gray-400 pl-2">
                145 Rating
              </p>
            </div>
          </div>
          <div className="max-sm:col-start-2 max-sm:row-start-2 max-sm:scale-75 max-sm:-translate-x-10">
            <h1 className="font-semibold text-[24px] max-sm:text-[20px]">Add A Product</h1>
            <button className="h-10 w-60 rounded-[10px] bg-[#B88E2F] text-[#FFFFFF] font-semibold text-[14px] flex justify-between items-center px-4">
              <h1>Choose a Product</h1>{" "}
              <Image
                src="/images/icons/arrowdown.png"
                alt="icon"
                width={20}
                height={11}
              />
            </button>
          </div>
        </div>
        <div className="mt-20 max-sm:mt-10  flex border-t border-t-gray-300 max-sm:overflow-auto">
          <div className="pt-8 max-sm:pt-4 border-r border-r-gray-300 px-4 max-sm:px-2 sm:w-[25%] max-sm:w-[33%]">
            <div>
              <h1 className="font-medium text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                General
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Sales Package
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Model Number
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Secondary Material
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Configuration
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Upholstery Material
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
                Upholstery Color
              </p>
            </div>
            <div>
              <h1 className="font-medium text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Product
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Origin of Manufacture
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Finish Type
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Adjustable Headrest
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Maximum Load Capacity
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
                Origin of Manufacture
              </p>
            </div>
            <div>
              <h1 className="font-medium text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Dimensions
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Width
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Height
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Depth
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Weight
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Seat Height
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
                Leg height
              </p>
            </div>
            <div>
              <h1 className="font-medium text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Warranty
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Warranty Summary
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Warranty Service Type
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Covered in Warrantyl
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                Not Covered in Warranty
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
                Domestic Warranty
              </p>
            </div>
          </div>
          <div className=" pt-8 max-sm:pt-4 border-r border-r-gray-300 px-4 max-sm:px-2 sm:w-[25%] max-sm:w-[33%]">
            <div>
              <h1 className="font-medium text-[#FFFFFF] text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                General
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              1 sectional sofa
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              TFCBLIGRBL6SRHS
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Solid Wood
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              L-shaped
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Fabric + Cotton
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              Bright Grey & Lion
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF] text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Product
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Foam
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Bright Grey & Lion
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              No
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              280 KG
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              India
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF]  text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Dimensions
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              265.32 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              76 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              167.76 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              45 KG
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              41.52 cm
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              5.46 cm
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF]  text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Warranty
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
                1 Year Manufacturing Warranty
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Warranty Against Manufacturing Defect
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              1 Year
              </p>
            </div>
            <button className="text-20px text-[#FFFFFF] bg-[#B88E2F] w-56 h-16 max-sm:w-full max-sm:h-10 max-sm:text-[12px] border-none ">
              Add To Cart
            </button>
          </div>
          <div className=" pt-8 max-sm:pt-4 border-r border-r-gray-300 px-4 max-sm:px-2 sm:w-[30%] max-sm:w-[33%]">
            <div>
              <h1 className="font-medium text-[#FFFFFF] text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                General
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              1 Three Seater, 2 Single Seater
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              DTUBLIGRBL568
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Solid Wood
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              L-shaped
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Fabric + Cotton
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              Bright Grey & Lion
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF] text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Product
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Matte
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Bright Grey & Lion
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              yes
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              300 KG
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              India
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF]  text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Dimensions
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              265.32 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              76 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              167.76 cm
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              65 KG
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              41.52 cm
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
              5.46 cm
              </p>
            </div>
            <div>
              <h1 className="font-medium  text-[#FFFFFF]  text-[28px] pb-10 max-sm:pb-4 max-sm:text-[18px]">
                Warranty
              </h1>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              1.2 Year Manufacturing Warranty
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              Warranty of the product is limited to manufacturing defects only.
              </p>
              <p className="text-[20px]  pb-6 max-sm:pb-2 max-sm:text-[12px]">
              The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.
              </p>
              <p className="text-[20px]  pb-20 max-sm:pb-6 max-sm:text-[12px]">
                3 Months.
              </p>
            </div>
            <button className="text-20px text-[#FFFFFF] bg-[#B88E2F] w-56 h-16 max-sm:w-full max-sm:h-10 max-sm:text-[12px] border-none ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF3EA] mt-16">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 px-14 py-28  items-center scale-90 gap-12 max-sm:scale-100 max-sm:py-14 max-sm:px-7">
          <Image
            width={337}
            height={70}
            src="/images/service1.png"
            alt="Services"
          />
          <Image
            width={329}
            height={70}
            src="/images/service2.png"
            alt="Services"
          />
          <Image
            width={245}
            height={70}
            src="/images/service3.png"
            alt="Services"
          />
          <Image
            width={259}
            height={70}
            src="/images/service4.png"
            alt="Services"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
