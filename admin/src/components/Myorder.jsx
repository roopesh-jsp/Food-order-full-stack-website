import React from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { useAdminContext } from "../context/adminContext.jsx";

export default function Myorder({ data }) {
  const noOfItems = data.items.length;

  const { backendUrl, atoken } = useAdminContext();

  async function handleChnage(e) {
    console.log(e.target.value);
    await axios.post(
      backendUrl + "/orders/update",
      {
        status: e.target.value,
        id: data._id,
      },
      {
        headers: {
          atoken,
        },
      }
    );
  }
  return (
    <div className="my_order">
      <img src={assets.parcel_icon} alt="" />
      <div className="my_order_details">
        <div className="my_order_items">
          {data.items.map((item, idx) => (
            <span key={item.item._id}>
              {" "}
              {item.item.name} X {item.qty} {noOfItems - idx === 1 ? "." : ","}
            </span>
          ))}
        </div>
        <div className="my_order_address">
          <p>{data.address.email}</p>
          <p>{data.address.number}</p>
          <p>{data.address.street}</p>
        </div>
      </div>
      <h4>$ {data.amount}</h4>
      <h4>items: {noOfItems}</h4>

      <select name="status" id="" className="status" onChange={handleChnage}>
        <option value={data.status}>{data.status}</option>
        {data.status === "food processing" ? (
          <></>
        ) : (
          <option value="food processing">food processing</option>
        )}
        {data.status === "out of delivery" ? (
          <></>
        ) : (
          <option value="out of delivery">out for delivery</option>
        )}
        {data.status === "delivered" ? (
          <></>
        ) : (
          <option value="delivered">delivered</option>
        )}
      </select>
    </div>
  );
}
