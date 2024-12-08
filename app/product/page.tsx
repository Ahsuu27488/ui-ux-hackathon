"use client";
import RelatedProducts from "@/components/RelatedProducts";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("white");

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div>
      <div className="font-poppins font-normal text-[16px] bg-[#F9F1E7] flex px-24 py-8">
        <h1 className="flex gap-5 px-3">
          <span className="text-[#9F9F9F]">
            <Link href="/"> Home</Link>
          </span>{" "}
          <img src="/images/icons/arrownext.png" alt="icon" />
          <span className="text-[#9F9F9F]">
            <Link href="/shop"> Shop</Link>
          </span>{" "}
          <img src="/images/icons/arrownext.png" alt="icon" />
        </h1>
        <h1 className="px-3 border-l font-medium border-l-gray-400">
          Asgaard Sofa
        </h1>
      </div>
      <div>
        <div className="flex max-sm:flex-col flex-row mx-24 py-16 gap-20 max-sm:mx-5 max-sm:py-4">
          {/* Left: Image Gallery */}
          <div className="flex flex-row-reverse gap-4 items-start h-[500px] w-[100%] max-sm:h-[500px pb-20]">
            <div className="bg-[#F9F1E7] rounded-[10px] h-full w-full flex justify-center items-center ">
              <img
                src="/images/mainframe.png"
                alt="Main Product"
                className="w-fit  px-7 object-cove rounded-[10px]"
              />
            </div>
            <div className="flex gap-4 flex-col">
              {[
                "/images/frame1.png",
                "/images/frame2.png",
                "/images/frame3.png",
                "/images/frame4.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product Thumbnail ${index + 1}`}
                  className="bg-[#F9F1E7] w-[170px] rounded-[10px] h-[138px] p-5 object-cover  hover:border hover:border-[#DB4444] cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start pt-20">
            <h1 className="text-5xl">Asgaard Sofa</h1>
            <h1 className="text-2xl text-[#9F9F9F]">Rs. 250,000.00</h1>
            <p className="text-[13px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="flex gap-5">
              <img
                src="/images/icons/stars.png"
                alt="stars"
                className="border-r border-r-gray-400 pr-3"
              />
              <h1 className="text-[13px] text-[#9F9F9F]">5 Customer Review</h1>
            </div>
            <div>
              <h1 className="text-[13px] text-[#9F9F9F]">Size</h1>
              <div className="flex gap-1 justify-start items-center">
                <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7]  p-3">
                  L
                </button>
                <button className="text-[16px] rounded-lg #F9F1E7 text-black bg-[#F9F1E7] focus:bg-[#B88E2F] focus:text-[#F9F1E7] hover:bg-[#B88E2F] hover:text-[#F9F1E7]  p-3">
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
              <button className="py-3 px-4 border border-black rounded-xl">
                + Compare
              </button>
            </div>
            <div className="grid grid-cols-3 text-[16px] text-[#9F9F9F]">
              <div>
                <h1>SKU</h1>
                <h1>Catergory</h1>
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
                <h1>SS001</h1>
                <h1>Sofas</h1>
                <h1>Sofa, Chair, Home, Shop</h1>
                <h1>Share</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-14 max-sm:gap-4 justify-center items-center">
          <h1 className="font-medium text-black text-[24px]">Descrption</h1>
          <h1 className="font-medium text-[#9F9F9F] text-[24px]">
            Additional Information
          </h1>
          <h1 className="font-medium text-[#9F9F9F] text-[24px]">
            Reviews [5]
          </h1>
        </div>
        <div className="text-[16px] text-[#9F9F9F] px-32 pt-16 flex flex-col gap-8 max-sm:px-5 max-sm:pt-10 max-sm:gap-4">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex justify-between items-stretch pt-10 max-sm:flex-col max-sm:scale-75 max-sm:gap-4 max-sm:pt-6">
          <img
            src="/images/sofa1.png"
            alt="SOFA"
            className="bg-[#F9F1E7] rounded-lg"
          />
          <img
            src="/images/sofa1.png"
            alt="SOFA"
            className="bg-[#F9F1E7] rounded-lg"
          />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default page;
