import React from "react";
import { assets } from "../assets/assets";
import { useAdminContext } from "../context/adminContext";

export default function Header() {
  const { atoken, setAToken } = useAdminContext();
  function handleLogout() {
    localStorage.removeItem("atoken");
    setAToken(null);
  }
  return (
    <>
      <header>
        <div className="logo">Logo</div>

        <div className="profile ">
          {atoken ? (
            <>
              <img src={assets.profile_image} alt="" />
              <button className="btn" onClick={handleLogout}>
                logout
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
      <hr />
    </>
  );
}
