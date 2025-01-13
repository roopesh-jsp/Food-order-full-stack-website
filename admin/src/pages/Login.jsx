import React, { useState } from "react";
import axios from "axios";
import { useAdminContext } from "../context/adminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { backendUrl, setAToken } = useAdminContext();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const extractedData = Object.fromEntries(formdata);
      console.log(backendUrl);

      const { data } = await axios.post(
        backendUrl + "/admin/login",
        extractedData
      );
      if (data.success) {
        localStorage.setItem("atoken", data.atoken);
        setAToken(data.atoken);
        navigate("/");
      } else {
        setError(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>login</h1>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      {error ? <p className="error">{error}</p> : <></>}
      <button> login</button>
    </form>
  );
}

export default Login;
