import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAdminContext } from "../context/adminContext";
import Login from "./Login";
// import { ToastContainer } from "react-toastify";

export default function Home() {
  const { atoken } = useAdminContext();
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        {atoken ? <Outlet /> : <Login />}
      </div>
    </div>
  );
}
