import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineDown } from "react-icons/ai";
const Payments = () => {
  return (
    <div className="bg-white">
      <div className="bg-sky-700 p-2">
        <h1 className="flex items-center">
          <AiOutlineArrowLeft className="w-12 h-6 text-white"></AiOutlineArrowLeft>
          <p className="font-bold flex-1 text-center text-white text-2xl mb-2 pt-3">
            Payments
          </p>
          <HiOutlineExclamationCircle className="w-12 h-6 mr-5 text-white"></HiOutlineExclamationCircle>
        </h1>
      </div>
      <div>
        <div className="p-4 mb-5 shadow-md bg-white mt-5 mx-10 border rounded-md">
          <div className="flex justify-between">
            <h1>Default Methods</h1>
            <h1 className="flex items-center text-gray-400">
              Both Options{" "}
              <AiOutlineRight className="h-5 w-5 mt-1"></AiOutlineRight>
            </h1>
          </div>
          <div className="flex justify-between mt-2">
            <h1>Payment Profile</h1>
            <h1 className="flex items-center text-gray-400">
              Bank Account{" "}
              <AiOutlineRight className="h-5 w-5 mt-1"></AiOutlineRight>
            </h1>
          </div>
          <div className="divider"></div>
          <div>
            <div className="flex justify-between mb-3">
              <h1 className="font-bold text-xl">Payment Overview</h1>
              <h1 className="flex items-center text-gray-400">
                Lifetime
                <AiOutlineDown className="h-4 w-4 mt-1"></AiOutlineDown>
              </h1>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="w-96 bg-orange-600 shadow-xl rounded-md">
                <div className="card-body text-white">
                  <p className="font-bold text-xl">Amount On Hold</p>
                  <p className="text-3xl">$701</p>
                </div>
              </div>
              <div className="w-96 bg-green-600 shadow-xl rounded-md">
                <div className="card-body text-white">
                  <p className="font-bold text-xl">Amount Recieved</p>
                  <p className="text-3xl">$7000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="ml-10 font-bold text-xl">Transactions</h1>
      <div className="flex justify-center text-white gap-2 mt-4">
        <div className="border rounded-2xl text-center bg-gray-300 text-gray-500 px-3 py-1 font-semibold">
          On Hold(22)
        </div>
        <div className="border rounded-2xl text-center  bg-blue-700 px-3 py-1 font-semibold">
          Payouts(12)
        </div>
        <div className="border rounded-2xl text-center bg-gray-300 text-gray-500 px-3 py-1 font-semibold">
          Refunds(1)
        </div>
      </div>
      <div>
        {[1, 2].map((id) => (
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
                    className="object-cover object-center rounded-md h-20 w-20"
                  />
                  <div className="space-y-2">
                    <h1 className="font-semibold">Order #00000</h1>
                    <h1 className="text-gray-500">30/12/22, 09.40 PM</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <h1 className="text-end text-lg">$500</h1>
                  <div className="flex items-center gap-1">
                    <div className="badge badge-xs badge-success"></div>
                    <h1>Received</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
