import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Item({ data }) {
  const navigate = useNavigate();
  async function handleDel(id) {
    const res = await axios.delete(`http://localhost:3000/admin/delete/${id}`);

    if (res.data.sucess) {
      navigate("/items");
    }
  }
  return (
    <div className="item">
      <p>
        <img src={`http://localhost:3000/images/${data.image}`} alt="" />
      </p>
      <p>{data.name}</p>
      <p>${data.price}</p>
      <p className="cross" onClick={() => handleDel(data._id)}>
        delete
      </p>
    </div>
  );
}
