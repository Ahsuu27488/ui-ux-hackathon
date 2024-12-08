import React from "react";
import MainProducts from "./MainProducts";
import Link from "next/link";
const RelatedProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <h1 className="font-mediun pb-12 text-black text-4xl max-sm:text-3xl max-sm:pb-0">Related Products</h1>
      <MainProducts />
      <div className="pt-12">
        <Link href="/shop">
          <button className="w-[245px] h-[48px] font-semibold text-lg bg-transparent border border-[#B88E2F] text-[#B88E2F] px-4 py-2">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProducts;
