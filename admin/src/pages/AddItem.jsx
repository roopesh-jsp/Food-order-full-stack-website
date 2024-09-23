import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

export default function AddItem() {
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  function handleChnage(e) {
    setData((prev) => {
      return { ...prev, [e.name]: e.value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formdataa = new FormData(e.target);
    const data = Object.fromEntries(formdataa);

    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("price", Number(data.price));
    formdata.append("discription", data.discription);
    formdata.append("catogery", data.catogery);
    formdata.append("image", image);

    const res = await axios.post("http://localhost:3000/admin/add", formdata);

    // if (res.data.sucess) {
    //   toast.success("item created", {
    //     position: "top-right",
    //   });
    // } else {
    //   toast.error(res.data.msg);
    // }
    if (res.data.sucess) {
      navigate("/items");
      setErrors(null);
    } else {
      setErrors(res.data.err.message);
    }
  }
  return (
    <div id="addItem">
      {/* <ToastContainer position="top-right" /> */}
      <form onSubmit={handleSubmit}>
        <div className="upload_img">
          <h3>upload image</h3>
          <label htmlFor="image">
            <img
              src={`${image ? URL.createObjectURL(image) : assets.upload_area}`}
              alt=""
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            name="image"
            required
            hidden
          />
        </div>
        <h3>product name</h3>
        <input type="text" name="name" id="" />
        <h3>product discription</h3>
        <textarea name="discription" id=""></textarea>

        <div className="flex_row">
          <div className="flex_col">
            <h3>choose catogery</h3>
            <select name="catogery" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="flex_col">
            <h3>price</h3>
            <input type="number" name="price" id="" />
          </div>
        </div>
        {errors && <h3 className="error">{errors}</h3>}
        <button>add</button>
      </form>
    </div>
  );
}
