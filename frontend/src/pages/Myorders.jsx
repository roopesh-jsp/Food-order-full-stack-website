import React, { useEffect, useState } from "react";
import axios from "axios";
import Myorder from "./Myorder";

export default function Myorders() {
  const [orders, setOrders] = useState([]);
  async function getOrders() {
    const { data } = await axios.post(
      "http://localhost:3000/orders/myorders",
      {},
      { headers: { token: localStorage.getItem("token") } }
    );

    if (data.success) {
      setOrders(data.myOrders);
      console.log(data.myOrders);
    }
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div id="my_orders">
      {orders.map((order) => (
        <Myorder data={order} key={order._id} />
      ))}
    </div>
  );
}
