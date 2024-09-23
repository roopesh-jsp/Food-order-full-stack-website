import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
}
