import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={`/product/${product.id}`}
        key={product.id}
        className="relative w-full max-w-[285px] min-w-[200px] aspect-[1/1.5] bg-[#F4F5F7] rounded overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 group"
      >
        <Image
          width={48}
          height={48}
          src="/images/icons/-30.png"
          alt="discount"
          className="absolute right-0 -translate-x-3 translate-y-3 w-10 h-10 md:w-12 md:h-12"
        />
        <div className="relative w-full h-[60%]">
          <Image
            fill
            src={product.image}
            alt={product.title}
            className="object-cover"
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 285px, 285px"
          />
        </div>
        <div className="px-3 md:px-5 py-4 md:py-[30px] flex flex-col h-[40%]">
          <h2 className="text-[#3A3A3A] font-semibold text-lg md:text-2xl line-clamp-1">
            {product.title}
          </h2>
          <p className="text-[#898989] text-sm md:text-base font-medium line-clamp-2">
            {product.excerpt}
          </p>
          <div className="mt-auto">
            <h3 className="font-semibold text-base md:text-xl text-[#3A3A3A] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span>USD {product.currentPrice.toLocaleString()}$</span>
              <span className="text-sm md:text-base text-[#B0B0B0] line-through">
                USD {product.markedPrice.toLocaleString()}
              </span>
            </h3>
          </div>
        </div>

        {/* Hover effect container */}
        <Link 
          href={`/product/${product.id}`}
          className="absolute inset-0 flex gap-4 md:gap-6 flex-col justify-center items-center opacity-0 group-hover:opacity-75 bg-black transition-opacity duration-300 ease-in-out"
        >
          <div className="opacity-100 flex gap-4 md:gap-6 flex-col justify-center items-center px-2">
            <button
              className="font-poppins font-semibold text-sm md:text-base text-[#B88E2F] h-10 md:h-12 w-40 md:w-52 bg-[#FFFFFF] flex items-center justify-center"
            >
              Preview
            </button>
            <div className="flex gap-2 md:gap-4 font-poppins font-medium text-sm md:text-base text-white">
              <button className="hover:bg-black hover:bg-opacity-50 hover:brightness-150 bg-transparent rounded-lg flex gap-1 items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="hover:brightness-150 bg-transparent rounded-lg flex gap-1 items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
                <span className="hidden sm:inline">Compare</span>
              </button>
              <button className="hover:brightness-150 bg-transparent rounded-lg flex gap-1 items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="hidden sm:inline">Like</span>
              </button>
            </div>
          </div>
        </Link>
      </Link>
    </div>
  );
};

export default ProductCard;