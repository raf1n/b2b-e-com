import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav/BottomNav";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <BottomNav></BottomNav>
    </div>
  );
};

export default Main;
