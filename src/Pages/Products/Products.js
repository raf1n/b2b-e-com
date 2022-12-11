import React from "react";

import { AiOutlineShareAlt } from "react-icons/ai";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
const Products = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-sky-700">
        <h1 className="flex items-center">
          <p className="font-bold flex-1 text-center text-white text-2xl mb-2 pt-3">
            Catalogue
          </p>
          <BsSearch className="w-12 h-6 mr-5 text-white"></BsSearch>
        </h1>
        <div className="flex justify-around mx-10  text-white">
          <p className="w-[30vw] text-center border-b-4">Products</p>
          <p className="w-[30vw] text-center">Categories</p>
        </div>
      </div>

      <div className="pb-20">
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md"
          >
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt=""
                    className="object-cover object-center rounded-md h-24 w-24 "
                  />
                  <div className="">
                    <p className="leading-snug text-lg">Item {id}</p>
                    <p className="leading-snug text-gray-500">1 Unit</p>
                    <p>$600</p>
                    <p className="text-success">In Stock</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-10">
                <BsThreeDotsVertical className="w-6 h-6 ml-6"></BsThreeDotsVertical>
                <input type="checkbox" className="toggle toggle-info" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center">
              <div className="flex items-center ">
                <AiOutlineShareAlt className="w-8 h-6"></AiOutlineShareAlt>{" "}
                Share FeedBack
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
