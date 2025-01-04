"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../app/api/products";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="relative h-fit group w-[220px] sm:w-[285px] bg-[#F4F5F7] col-span-1 rounded overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <Image
            width={48}
            height={48}
            src="/images/icons/-30.png"
            alt="discount"
            className="absolute right-0 -translate-x-5 translate-y-5"
          />

          <Image
            width={285}
            height={301}
            src="/images/products/syltherine.png" // You might want to replace this with product.image if you have local images
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="px-5 py-[30px] flex flex-col">
            <h2 className="text-[#3A3A3A] font-semibold text-[24px]">
              {product.title}
            </h2>
            <p className="text-[#898989] text-[16px] font-medium">
              {product.excerpt}
            </p>
            <h3 className="font-semibold text-[20px] text-[#3A3A3A] flex justify-between items-center">
              Rp {product.currentPrice.toLocaleString()}
              <span className="text-[16px] text-[#B0B0B0] line-through">
                Rp {product.markedPrice.toLocaleString()}
              </span>
            </h3>
          </div>

          {/* Hover effect container */}
          <div className="absolute inset-0 flex gap-6 flex-col justify-center items-center opacity-0 group-hover:opacity-75 bg-black transition-opacity duration-300 ease-in-out">
            <div className="opacity-100 flex gap-6 flex-col justify-center items-center">
              <Link
                href={`/product/${product.id}`}
                className="font-poppins font-semibold text-[16px] text-[#B88E2F] h-12 w-52 bg-[#FFFFFF] flex items-center justify-center top-52"
              >
                Add to Cart
              </Link>
              <div className="flex gap-4 font-poppins font-medium text-[16px] text-white">
                <button className="hover:bg-black hover:bg-opacity-50 hover:brightness-150 bg-transparent rounded-lg flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  Share
                </button>
                <button className="hover:filter hover:brightness-150 bg-transparent rounded-lg flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  Compare
                </button>
                <button className="hover:filter hover:brightness-150 bg-transparent rounded-lg flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Like
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
