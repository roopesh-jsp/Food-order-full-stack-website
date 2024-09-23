import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function AllItems() {
  const [items, setItems] = useState([]);
  async function getData() {
    const { data } = await axios.get(`http://localhost:3000/admin/all`);
    setItems(data.items);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="#items">
      <h2>all Items</h2>

      <div className="items_head">
        <p>item</p>
        <p>title</p>
        <p>price</p>

        <p>remove</p>
      </div>
      <br />
      <hr />
      <div className="items">
        {items.map((item, idx) => (
          <Item data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
