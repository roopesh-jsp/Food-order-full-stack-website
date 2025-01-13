import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../context/adminContext";

export default function Item({ data, getData }) {
  const navigate = useNavigate();
  const { backendUrl, atoken } = useAdminContext();
  async function handleDel(id) {
    const res = await axios.delete(`${backendUrl}/admin/delete/${id}`, {
      headers: {
        atoken,
      },
    });

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
        <img src={`${backendUrl}/images/${data.image}`} alt="" />
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
