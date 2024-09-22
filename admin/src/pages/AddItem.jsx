import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";

export default function AddItem() {
  const [image, setImage] = useState(null);

  function handleChnage(e) {
    setData((prev) => {
      return { ...prev, [e.name]: e.value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    const res = await axios.post("http://localhost:3000/admin/add", { data });
  }
  return (
    <div id="addItem">
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
              console.log(e);
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
        <button>add</button>
      </form>
    </div>
  );
}
