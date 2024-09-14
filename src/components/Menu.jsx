import React, { useState } from "react";
import { menu_list } from "../assets/assets";
import Menucatogorey from "./Menu-catogorey";
import FoodItems from "./FoodItems";

export default function Menu() {
  const [catogorey, setCatogorey] = useState("all");
  return (
    <div className="menu">
      <h3>Explore our menu</h3>
      <p>
        Discover a world of flavors on our menu! From sizzling starters to
        mouthwatering mains and indulgent desserts, every dish is crafted to
        perfection. Whether you're in the mood for comfort food or something
        adventurous, we've got options to satisfy every craving. Dive into our
        selection and treat yourself to something truly delicious!
      </p>
      <div className="menu_list">
        {menu_list.map((cat, idx) => (
          <Menucatogorey
            key={idx}
            data={cat}
            setCatogorey={setCatogorey}
            catogorey={catogorey}
          />
        ))}
      </div>
      <FoodItems catogorey={catogorey} />
    </div>
  );
}
