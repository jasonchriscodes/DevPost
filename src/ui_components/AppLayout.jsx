import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
