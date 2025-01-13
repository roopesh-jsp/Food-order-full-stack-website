import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useAdminContext } from "../context/adminContext";

export default function AllItems() {
  const [items, setItems] = useState([]);

  const { backendUrl, atoken } = useAdminContext();
  async function getData() {
    const { data } = await axios.get(`${backendUrl}/admin/all`, {
      headers: {
        atoken,
      },
    });
    setItems(data.items);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="#items">
      <h2>all Items</h2>

      <div className="items_head">
        <p
          style={{
            position: "relative",
            left: "30px",
          }}
        >
          item
        </p>
        <p
        // style={{
        //   position: "relative",
        //   left: "30px",
        // }}
        >
          title
        </p>

        <p
        // style={{
        //   position: "relative",
        //   left: "40px",
        // }}
        >
          price
        </p>

        <p>remove</p>
      </div>
      <br />
      <hr />
      <div className="items">
        {items.map((item, idx) => (
          <Item data={item} key={item._id} getData={getData} />
        ))}
      </div>
    </div>
  );
}
