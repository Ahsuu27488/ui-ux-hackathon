import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div>
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
            <h1 className="font-semibold text-5xl text-black">Blog</h1>
            <p className="font-light text-lg text-black flex gap-4">
              <span className="font-medium">
                <Link href="/">Home</Link>
              </span>{" "}
              / <span className="">Blog</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-24 px-16 max-sm:py-12 max-sm:px-10 sm:gap-20 max-sm:flex-col">
        <div className=" flex flex-col sm:w-[60%] ">
          {/* blog 1 */}
          <div className="sm:w-  pb-16 max-sm:pb-10">
            <div>
              <Image
                src="/images/blogpic1.png"
                alt="frame"
                height={817}
                width={500}
                className="rounded-[10px] w-full pb-6 max-sm:pb-3"
              />
              <Image
                src="/images/details.png"
                alt="details"
                height={24}
                width={349}
                className="max-sm:scale-90 pb-6 max-sm:pb-3"
              />{" "}
              <h1 className="font-medium text-[30px] max-sm:text-[18px] text-black pb-4 max-sm:pb-2">
                Going all-in with millennial design
              </h1>
              <p className="text-[#9F9F9F] text-[15px] max-sm:text-[12px] pb-6 max-sm:pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
                Read More
              </h1>
            </div>
          </div>
          <div className="sm:w-  pb-16 max-sm:pb-10">
            <div>
              {/* blog 2 */}
              <Image
                src="/images/blogpic2.png"
                alt="frame"
                height={817}
                width={500}
                className="rounded-[10px] w-full pb-6 max-sm:pb-3"
              />
              <Image
                src="/images/details.png"
                alt="details"
                height={24}
                width={349}
                className="max-sm:scale-90 pb-6 max-sm:pb-3"
              />{" "}
              <h1 className="font-medium text-[30px] max-sm:text-[18px] text-black pb-4 max-sm:pb-2">
                Exploring new ways of decorating
              </h1>
              <p className="text-[#9F9F9F] text-[15px] max-sm:text-[12px] pb-6 max-sm:pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
                Read More
              </h1>
            </div>
          </div>
          {/* blog 3 */}
          <div className="sm:w-  pb-16 max-sm:pb-6">
            <div>
              <Image
                src="/images/blogpic3.png"
                alt="frame"
                height={817}
                width={500}
                className="rounded-[10px] w-full pb-6 max-sm:pb-3"
              />
              <Image
                src="/images/details.png"
                alt="details"
                height={24}
                width={349}
                className="max-sm:scale-90 pb-6 max-sm:pb-3"
              />{" "}
              <h1 className="font-medium text-[30px] max-sm:text-[18px] text-black pb-4 max-sm:pb-2">
                Handmade pieces that took time to make
              </h1>
              <p className="text-[#9F9F9F] text-[15px] max-sm:text-[12px] pb-6 max-sm:pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="text-[16px] max-sm:text-[14px] pb-3 underline underline-offset-8">
                Read More
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center flex-col">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-96 py-6 max-sm:w-80 pl-5 max-sm:py-3 bg-transparent border border-[#9F9F9F] rounded-[10px]"
            />
            <Image
              src="/images/icons/search2.png"
              width={36}
              height={36}
              alt="search"
              className="max-sm:size-6 absolute right-6 -translate-y-14 max-sm:-translate-y-9"
            />
          </div>
          <div className="flex justify-start items-start">
            <h1 className="  text-[24px] font-medium sm:semibold pt-16 max-sm:pt-8">
              Categories
            </h1>
          </div>
          <div className="flex pt-16 max-sm:pt-8 justify-between w-80 max-sm:w-72 font-medium">
            <div className="flex flex-col gap-10">
              <h1 className="text-[16px] text-[#9F9F9F]">Crafts</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Design</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Handmade</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Interior</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">wood</h1>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[16px] text-[#9F9F9F]">2</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">8</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">7</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">1</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">6</h1>
            </div>
          </div>
          <div className="max-sm:w-full flex flex-col justify-center items-start">
            <h1 className="text-[24px] font-medium sm:semibold pt-20 max-sm:pt-14">
              Recent Posts
            </h1>
            <div className="pt-12 max-sm:pt-4 flex flex-col gap-10 max-sm:gap-5">
              <Image
                src="/images/blogpost1.png"
                alt="blog post"
                width={211}
                height={60}
              />
              <Image
                src="/images/blogpost2.png"
                alt="blog post"
                width={241}
                height={60}
              />
              <Image
                src="/images/blogpost3.png"
                alt="blog post"
                width={251}
                height={60}
              />
              <Image
                src="/images/blogpost4.png"
                alt="blog post"
                width={211}
                height={60}
              />
              <Image
                src="/images/blogpost5.png"
                alt="blog post"
                width={211}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
