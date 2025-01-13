import React, { useEffect, useState } from "react";
import Myorder from "../components/Myorder.jsx";
import axios from "axios";
import { useAdminContext } from "../context/adminContext.jsx";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { backendUrl, atoken } = useAdminContext();
  async function getOrders() {
    const { data } = await axios.get(backendUrl + "/orders/allorders", {
      headers: {
        atoken,
      },
    });

    if (data.success) {
      setOrders(data.myOrders);
    }
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div id="my_orders">
      {orders.length === 0 ? (
        <h1 className="fallback">no orders present</h1>
      ) : (
        <></>
      )}
      {orders.map((order) => (
        <Myorder data={order} key={order._id} />
      ))}
    </div>
  );
}
