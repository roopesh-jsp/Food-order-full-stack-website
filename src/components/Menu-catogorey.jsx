import React from "react";

export default function Menucatogorey({ data, catogorey, setCatogorey }) {
  const { menu_name, menu_image } = data;
  return (
    <div
      onClick={() =>
        setCatogorey((prev) => (prev === menu_name ? "all" : menu_name))
      }
      className={
        catogorey === menu_name
          ? "catogorey_active menu_catogorey"
          : "menu_catogorey"
      }
    >
      <img src={menu_image} alt="catogorey-img" />
      <h5>{menu_name}</h5>
    </div>
  );
}
