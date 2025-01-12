import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Item({ data, getData }) {
  const navigate = useNavigate();
  async function handleDel(id) {
    const res = await axios.delete(`http://localhost:3000/admin/delete/${id}`);

    if (res.data.sucess) {
      navigate("/items");
      getData();
    }
  }

  async function handleUpdate(id) {
    navigate(`/${id}`);
  }
  return (
    <div className="item">
      <p>
        <img src={`http://localhost:3000/images/${data.image}`} alt="" />
      </p>
      <p>{data.name}</p>
      <p>${data.price}</p>
      <div className="item_cta">
        <p className="cross red" onClick={() => handleDel(data._id)}>
          delete
        </p>
        <p className="cross blue" onClick={() => handleUpdate(data._id)}>
          update
        </p>
      </div>
    </div>
  );
}
