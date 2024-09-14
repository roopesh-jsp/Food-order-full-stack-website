import React from "react";
import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";

export default function FoodItems({ catogorey }) {
  let data;
  if (catogorey === "all") {
    data = food_list;
  } else {
    data = food_list.filter((item) => item.category === catogorey);
  }
  return (
    <div className="foodItems_container">
      {data.map((item, idx) => (
        <FoodItem key={idx} data={item} />
      ))}
    </div>
  );
}
