import React from "react";

import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-sky-700">
        <h1 className="flex items-center mx-10 p-4">
          <p className="font-bold flex-1 text-center text-white text-2xl mb-2 pt-3 flex items-center">
            Mono Super Market
            <VscVerified className="w-12 h-6 mr-5 text-white"></VscVerified>
          </p>
          <input type="checkbox" className="toggle toggle-info" />
        </h1>
      </div>
      <div>
        <div className="flex justify-between mb-3 mx-20 mt-5">
          <h1 className="font-bold text-xl">Overview</h1>
          <h1 className="flex items-center text-gray-400">
            Last Week
            <AiOutlineDown className="h-4 w-4 mt-1"></AiOutlineDown>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            <div className="w-96 bg-white shadow-xl rounded-md">
              <div className="card-body text-black">
                <p className="font-bold text-xl">Orders</p>
                <p className="text-3xl">33</p>
              </div>
            </div>
            <div className="w-96 bg-white shadow-xl rounded-md">
              <div className="card-body text-black">
                <p className="font-bold text-xl">Total Sales</p>
                <p className="text-3xl">$7100</p>
              </div>
            </div>
            <div className="w-96 bg-white shadow-xl rounded-md">
              <div className="card-body text-black">
                <p className="font-bold text-xl">Store views</p>
                <p className="text-3xl">301</p>
              </div>
            </div>
            <div className="w-96 bg-white shadow-xl rounded-md">
              <div className="card-body text-black">
                <p className="font-bold text-xl">Product views</p>
                <p className="text-3xl">19,121</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-3 mx-20 mt-5">
        <h1 className="font-bold text-xl">Active Orders</h1>
        <h1 className="flex items-center text-gray-400">
          View All
          <AiOutlineDown className="h-4 w-4 mt-1"></AiOutlineDown>
        </h1>
      </div>
      <div className="flex justify-center text-white gap-2 mt-4">
        <div className="border rounded-2xl text-center bg-blue-700 px-3 py-1 font-semibold">
          Pending(52)
        </div>
        <div className="border rounded-2xl text-center bg-gray-300 text-gray-500 px-3 py-1 font-semibold">
          Accepted(72)
        </div>
        <div className="border rounded-2xl text-center bg-gray-300 text-gray-500 px-3 py-1 font-semibold">
          Shipped(32)
        </div>
      </div>
      <div>
        {[1, 2].map((id) => (
          <div
            key={id}
            className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md"
          >
            <div className="mb-2 flex justify-between items-center">
              <h1 className="font-semibold">
                Order #00000{" "}
                <button className=" text-white btn-xs bg-green-600 gap-2">
                  NEW{" "}
                </button>
              </h1>
              <h1 className="text-gray-500">Today, 11.11PM</h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt=""
                    className="object-cover object-center rounded-md h-20 w-20 "
                  />
                  <div className="space-y-2">
                    <p className="leading-snug text-lg">Item {id}</p>
                    <p className="leading-snug text-gray-500">$200</p>
                  </div>
                </div>
              </div>
              <div>
                <button className=" text-red-700 font-bold btn-sm bg-red-300 rounded-sm gap-2">
                  Paid{" "}
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="badge badge-xs badge-warning"></div>
                <h1>Pending</h1>
              </div>
              <button className="btn btn-sm btn-outline">
                Details <AiOutlineRight></AiOutlineRight>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {[3, 4].map((id) => (
          <div
            key={id}
            className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md"
          >
            <div className="mb-2 flex justify-between items-center">
              <h1 className="font-semibold">Order #1111 </h1>
              <h1 className="text-gray-500">Today, 11.11PM</h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt=""
                    className="object-cover object-center rounded-md h-20 w-20 "
                  />
                  <div className="space-y-2">
                    <p className="leading-snug text-lg">Item {id}</p>
                    <p className="leading-snug text-gray-500">$200</p>
                  </div>
                </div>
              </div>
              <div>
                <button className=" text-orange-700 font-bold btn-sm bg-orange-300 rounded-sm gap-2">
                  COD{" "}
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="badge badge-xs badge-info"></div>
                <h1>Shipped</h1>
              </div>
              <button className="btn btn-sm btn-outline">
                Details <AiOutlineRight></AiOutlineRight>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-20">
        {[5, 6].map((id) => (
          <div
            key={id}
            className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md"
          >
            <div className="mb-2 flex justify-between items-center">
              <h1 className="font-semibold">Order #2222 </h1>
              <h1 className="text-gray-500">Today, 11.11PM</h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://source.unsplash.com/random/480x360/?4"
                    alt=""
                    className="object-cover object-center rounded-md h-20 w-20 "
                  />
                  <div className="space-y-2">
                    <p className="leading-snug text-lg">Item {id}</p>
                    <p className="leading-snug text-gray-500">$200</p>
                  </div>
                </div>
              </div>
              <div>
                <button className=" text-orange-700 font-bold btn-sm bg-orange-300 rounded-sm gap-2">
                  COD{" "}
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="badge badge-xs badge-success"></div>
                <h1>Accepted</h1>
              </div>
              <button className="btn btn-sm btn-outline">
                Details <AiOutlineRight></AiOutlineRight>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
