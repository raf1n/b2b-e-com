import React from "react";
import { FaGripHorizontal } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { AiOutlineUser, AiOutlineDropbox } from "react-icons/ai";
import { Link } from "react-router-dom";
const BottomNav = () => {
  return (
    <div className="btm-nav">
      <button>
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 ml-2 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>
      </button>

      <button>
        <Link to="/managerOrders">
          <AiOutlineDropbox className="w-12"></AiOutlineDropbox>
          <span className="btm-nav-label">Orders</span>
        </Link>
      </button>
      <button>
        <Link to="/products">
          <FaGripHorizontal className="w-14"></FaGripHorizontal>
          <span className="btm-nav-label">Products</span>
        </Link>
      </button>
      <button>
        <Link to="/customers">
          <FiUsers className="w-16"></FiUsers>
          <span className="btm-nav-label">Customers</span>
        </Link>
      </button>
      <button>
        <Link to="/payments">
          <MdOutlinePayment className="w-16"></MdOutlinePayment>
          <span className="btm-nav-label">Payments</span>
        </Link>
      </button>

      <button>
        <AiOutlineUser className="w-12"></AiOutlineUser>
        <span className="btm-nav-label">Accounts</span>
      </button>
    </div>
  );
};

export default BottomNav;
