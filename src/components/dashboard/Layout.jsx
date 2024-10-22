import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="w-full ml-10 md:ml-56">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
