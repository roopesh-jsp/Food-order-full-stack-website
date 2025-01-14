import React from "react";
import { assets } from "../assets/assets.js";

export default function Myorder({ data }) {
  const noOfItems = data.items.length;
  return (
    <div className="my_order">
      <img src={assets.parcel_icon} alt="" />
      <div className="my_order_items">
        {data.items.map((item, idx) => (
          <span key={item.item._id}>
            {" "}
            {item.item.name} X {item.qty} {noOfItems - idx === 1 ? "." : ","}
          </span>
        ))}
      </div>
      <h4>$ {data.amount}</h4>
      <h4>items: {noOfItems}</h4>
      <button className="status">{data.status}</button>
    </div>
  );
}
