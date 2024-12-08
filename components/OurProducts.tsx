import React from "react";

const OurProducts = () => {
  return (
    <div className="px-[100px] py-[100px] flex flex-col justify-center items-center">
      <h1 className="heading pb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:scale-50 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {/* Product1 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/syltherine.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">
              Syltherine
            </h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Stylish cafe chair
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 2.500.000
              <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span>
            </h3>
          </div>
        </div>
        {/* Product2 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/leviosa.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">
              Leviosa
            </h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Stylish cafe chair
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 2.500.000
              {/* <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span> */}
            </h3>
          </div>
        </div>
        {/* Product3 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/syltherine.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">Lolito</h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Luxury big sofa
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 7.000.000
              <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 14.500.000
              </span>
            </h3>
          </div>
        </div>
        {/* Product4 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/respira.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">
              Respira
            </h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Outdoor bar table and stool
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 500.000
              {/* <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span> */}
            </h3>
          </div>
        </div>
        {/* Product5 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/grifo.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">Grifo</h2>
            <p className="text-[#898989] text-[16px] font-medium">Night lamp</p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 1.500.000
              {/* <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span> */}
            </h3>
          </div>
        </div>
        {/* Product6 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/muggo.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">Muggo</h2>
            <p className="text-[#898989] text-[16px] font-medium">Small mug</p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 150.000
              {/* <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span> */}
            </h3>
          </div>
        </div>
        {/* Product7 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/pingky.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">Pingky</h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Cute Bed Set
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 7.000.000
              <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 14.000.000
              </span>
            </h3>
          </div>
        </div>
        {/* Product8 */}
        <div className="w-[285px] bg-[#F4F5F7]">
          <img src="/images/products/potty.png" alt="Product" />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">Potty</h2>
            <p className="text-[#898989] text-[16px] font-medium">
              Minimalist Flower Pot
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp 500.000
              <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp 500.000
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
