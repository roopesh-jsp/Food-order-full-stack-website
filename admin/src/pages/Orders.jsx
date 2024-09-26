import React, { useEffect, useState } from "react";
import Myorder from "../components/Myorder.jsx";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  async function getOrders() {
    const { data } = await axios.get("http://localhost:3000/orders/allorders");

    if (data.success) {
      setOrders(data.myOrders);
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
