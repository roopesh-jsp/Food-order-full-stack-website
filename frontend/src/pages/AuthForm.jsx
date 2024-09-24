import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useCartData } from "../store/CartContext";

export default function AuthForm({ setShowLogin }) {
  const { setToken } = useCartData();
  const [currType, setCurrType] = useState("login");
  const [errors, setError] = useState(null);
  async function handlesubmit(e) {
    e.preventDefault();

    let url = "http://localhost:3000/users/";
    if (currType === "login") {
      url += "login";
    } else {
      url += "register";
    }

    const formdata = new FormData(e.target);
    const userData = Object.fromEntries(formdata);
    console.log(userData);

    const { data } = await axios.post(url, userData);
    console.log(data);

    if (data.success) {
      setShowLogin(false);
      setToken(data.token);
      setError(null);
      localStorage.setItem("token", data.token);
    } else {
      setError(data.msg);
    }
  }
  return (
    <div className="authContainer">
      <div className="authForm">
        <h1>{currType}</h1>
        <img
          src={assets.cross_icon}
          alt=""
          className="closeBtn"
          onClick={() => setShowLogin(false)}
        />
        <form onSubmit={handlesubmit}>
          <input type="text" name="email" id="email" placeholder="email" />
          {currType === "signup" && (
            <input type="text" name="name" placeholder="name" />
          )}
          <input type="password" name="password" placeholder="password" />
          <p className="error">{errors}</p>
          <button style={{ cursor: "pointer" }}>{currType}</button>
          {currType === "login" ? (
            <p>
              didnt have a account{" "}
              <span onClick={() => setCurrType("signup")}>register</span>
            </p>
          ) : (
            <p>
              already have a account{" "}
              <span onClick={() => setCurrType("login")}>login</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
