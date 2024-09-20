import React, { useState } from "react";
import { assets } from "../assets/assets";

export default function AuthForm({ setShowLogin }) {
  const [currType, setCurrType] = useState("login");
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
        <form>
          <input type="text" name="email" id="email" placeholder="email" />
          {currType === "signup" && (
            <input type="text" name="name" placeholder="name" />
          )}
          <input type="password" name="password" placeholder="password" />
          <button>{currType}</button>
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
