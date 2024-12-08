import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 border-b border-b-gray-400">
      <p className="font-semibold text-[20px] text-[#616161]">
        Share your setup with
      </p>
      <h1 className="font-bold text-[40px] text-[#3A3A3A]">#FuniroFurniture</h1>
      <div className="">
        <img src="/images/images.png" alt="Gallery" />
      </div>
    </div>
  );
};

export default Gallery;
