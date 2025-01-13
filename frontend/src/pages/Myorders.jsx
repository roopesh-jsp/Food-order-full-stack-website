import React, { useEffect, useState } from "react";
import axios from "axios";
import Myorder from "./Myorder";
import { useAppContext } from "../store/AppContext";

export default function Myorders() {
  const [orders, setOrders] = useState([]);
  const { backendUrl } = useAppContext();
  async function getOrders() {
    const { data } = await axios.post(
      backendUrl + "/orders/myorders",
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
      {orders.length === 0 ? (
        <h1 className="fallback">no orders from you</h1>
      ) : (
        <></>
      )}
      {orders.map((order) => (
        <Myorder data={order} key={order._id} />
      ))}
    </div>
  );
}
