import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Customers = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-sky-700">
        <h1 className="flex items-center">
          <AiOutlineArrowLeft className="w-12 h-6 text-white"></AiOutlineArrowLeft>
          <p className="font-bold flex-1 text-center text-white text-2xl mb-2 pt-3">
            My Customers
          </p>
        </h1>
        <div className="form-control px-5 py-4">
          <input
            type="text"
            placeholder="Search By Customer Name.."
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="pb-20">
        {[1, 2, 3, 4, 5].map((customer, id) => (
          <div
            key={id}
            className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md"
          >
            <div className="">
              <div className="flex gap-4 items-center">
                <img
                  src="https://source.unsplash.com/random/480x360/?4"
                  alt=""
                  className="object-cover object-center rounded-md h-20 w-20 "
                />
                <div className="space-y-2">
                  <p className="leading-snug text-lg">Chitra Savant</p>
                  <p className="leading-snug text-gray-500">22 Orders</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
