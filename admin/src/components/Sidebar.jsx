import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <NavLink to="/" className={({ isActive }) => isActive && "active"}>
        <img src={assets.add_icon} alt="" />
        <p>add item</p>
      </NavLink>
      <NavLink to="/items">
        <img src={assets.order_icon} alt="" />
        <p>list items</p>
      </NavLink>
      <NavLink to="/orders">
        <img src={assets.order_icon} alt="" />
        <p>orders</p>
      </NavLink>
    </div>
  );
}
