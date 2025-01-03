"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../api/products";
import RelatedProducts from "@/components/RelatedProducts";

interface Product {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  currentPrice: number;
  markedPrice: number;
  ratings: number;
  description: string;
}

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (params.id) {
      const productData = products.find((p) => p.id === Number(params.id));
      setProduct(productData || null);
    }
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="font-poppins font-normal text-[16px] bg-[#F9F1E7] flex px-24 py-8 max-sm:px-4">
        <h1 className="flex gap-5 px-3">
          <span className="text-[#9F9F9F]">
            <Link href="/"> Home</Link>
          </span>{" "}
          <Image
            width={20}
            height={20}
            src="/images/icons/arrownext.png"
            alt="icon"
          />
          <span className="text-[#9F9F9F]">
            <Link href="/shop"> Shop</Link>
          </span>{" "}
          <Image
            width={20}
            height={20}
            src="/images/icons/arrownext.png"
            alt="icon"
          />
        </h1>
        <h1 className="px-3 border-l font-medium border-l-gray-400">
          {product.title}
        </h1>
      </div>
      <div>
        <div className="flex max-sm:flex-col flex-row mx-24 py-16 gap-20 max-sm:mx-5 max-sm:py-4">
          {/* Left: Image Gallery */}
          <div className="flex flex-row-reverse gap-4 items-start h-[500px] w-[100%] max-sm:h-[500px pb-20]">
            <div className="bg-[#F9F1E7] rounded-[10px] h-full w-full flex justify-center items-center ">
              <Image
                width={481}
                height={391}
                src="/images/products/syltherine.png"
                alt={product.title}
                className="w-fit px-7 object-cover rounded-[10px]"
              />
            </div>
            <div className="flex gap-4 flex-col">
              {[1, 2, 3, 4].map((index) => (
                <Image
                  width={76}
                  height={61}
                  key={index}
                  src="/images/products/syltherine.png"
                  alt={`${product.title} Thumbnail ${index}`}
                  className="bg-[#F9F1E7] w-[170px] rounded-[10px] h-[138px] p-5 object-cover hover:border hover:border-[#DB4444] cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start pt-20">
            <h1 className="text-5xl">{product.title}</h1>
            <h1 className="text-2xl text-[#9F9F9F]">
              Rs. {product.currentPrice.toLocaleString()}.00
            </h1>
            <p className="text-[13px]">{product.description}</p>
            <div className="flex gap-5">
              <div className="border-r border-r-gray-400 pr-3">
                {/* Replace static stars with dynamic rating */}
                {"★".repeat(Math.floor(product.ratings))}
                {product.ratings % 1 >= 0.5 ? "½" : ""}
                {"☆".repeat(5 - Math.ceil(product.ratings))}
              </div>
              <h1 className="text-[13px] text-[#9F9F9F]">
                {product.ratings} Customer Review
              </h1>
            </div>
            <div>
              <h1 className="text-[13px] text-[#9F9F9F]">Size</h1>
              <div className="flex gap-1 justify-start items-center">
                <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] p-3">
                  L
                </button>
                <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] p-3">
                  XL
                </button>
                <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7] p-3">
                  XS
                </button>
              </div>
            </div>
            <div>
              <h1>Color</h1>
              <div className="flex gap-2 focus:stroke-2 focus:stroke-gray-600 hover:stroke-2 hover:stroke-gray-600">
                <button className="rounded-full h-7 w-7 bg-[#816DFA]"></button>
                <button className="rounded-full h-7 w-7 bg-[#000000]"></button>
                <button className="rounded-full h-7 w-7 bg-[#B88E2F]"></button>
              </div>
            </div>
            <div className="w-full flex gap-4 pb-10 border-b border-b-gray-200">
              <button className="">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border border-gray-400 rounded-xl">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </button>
              <button className="py-3 px-4 border border-black rounded-xl">
                Add to Cart
              </button>
              <Link href="/product/compare">
                <button className="py-3 px-4 border border-black rounded-xl">
                  + Compare
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 text-[16px] text-[#9F9F9F]">
              <div>
                <h1>SKU</h1>
                <h1>Category</h1>
                <h1>Tags</h1>
                <h1>Share</h1>
              </div>
              <div>
                <h1>:</h1>
                <h1>:</h1>
                <h1>:</h1>
                <h1>:</h1>
              </div>
              <div>
                <h1>SS00{product.id}</h1>
                <h1>Furniture</h1>
                <h1>{product.title}, Furniture, Shop</h1>
                <h1>Share</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-14 max-sm:gap-4 justify-center items-center">
          <h1 className="font-medium text-black text-[24px]">Description</h1>
          <h1 className="font-medium text-[#9F9F9F] text-[24px]">
            Additional Information
          </h1>
          <h1 className="font-medium text-[#9F9F9F] text-[24px]">
            Reviews [{Math.floor(product.ratings)}]
          </h1>
        </div>
        <div className="text-[16px] text-[#9F9F9F] px-32 pt-16 flex flex-col gap-8 max-sm:px-5 max-sm:pt-10 max-sm:gap-4">
          <p>{product.description}</p>
          <p>{product.excerpt}</p>
        </div>
        <div className="flex justify-between items-stretch pt-10 max-sm:flex-col max-sm:scale-75 max-sm:gap-4 max-sm:pt-6">
          <Image
            width={605}
            height={348}
            src={product.image}
            alt={`${product.title} View 1`}
            className="bg-[#F9F1E7] rounded-lg"
          />
          <Image
            width={605}
            height={348}
            src={product.image}
            alt={`${product.title} View 2`}
            className="bg-[#F9F1E7] rounded-lg"
          />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;