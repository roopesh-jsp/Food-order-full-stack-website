import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAdminContext } from "../context/adminContext.jsx";
// import { toast, ToastContainer } from "react-toastify";

export default function AddItem() {
  const params = useParams();
  const id = params.id;
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { backendUrl, atoken } = useAdminContext();

  async function fetchItemData() {
    try {
      const { data } = await axios.get(`${backendUrl}/admin/item/${id}`, {
        headers: {
          atoken,
        },
      });
      console.log(data);
      if (data.success) {
        setData(data.item);
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (id) {
      fetchItemData();
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      const formdataa = new FormData(e.target);
      formdataa.append("itemId", id);
      const dataa = Object.fromEntries(formdataa);
      const { data } = await axios.post(backendUrl + "/admin/update", dataa, {
        headers: {
          atoken,
        },
      });
      console.log(data);

      if (data.sucess) {
        navigate("/items");
      }
      return;
    }

    const x = new FormData(e.target);
    const y = Object.fromEntries(x);
    const formdata = new FormData();
    formdata.append("itemId", id);
    formdata.append("name", y.name);
    formdata.append("price", Number(y.price));
    formdata.append("discription", y.discription);
    formdata.append("catogery", y.catogery);
    formdata.append("image", image);

    console.log(image);

    const res = await axios.post(backendUrl + "/admin/add", formdata, {
      headers: {
        atoken,
      },
    });

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
            hidden
          />
        </div>
        <h3>product name</h3>
        <input type="text" name="name" id="" defaultValue={data.name} />
        <h3>product discription</h3>
        <textarea
          name="discription"
          id=""
          defaultValue={data.discription}
        ></textarea>

        <div className="flex_row">
          <div className="flex_col">
            <h3>choose catogery</h3>
            <select name="catogery" id="" defaultValue={data.catogery}>
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
            <input type="number" name="price" id="" defaultValue={data.price} />
          </div>
        </div>
        {errors && <h3 className="error">{errors}</h3>}
        <button>{id ? "update" : "add"}</button>
      </form>
    </div>
  );
}
