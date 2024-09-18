import React from "react";
import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";
import { useCartData } from "../store/CartContext";

export default function FoodItems({ catogorey }) {
  const data = useCartData();

  return (
    <div className="foodItems_container">
      {data.item.map((item, idx) => {
        if (catogorey === "all" || catogorey === item.category) {
          return <FoodItem key={idx} data={item} />;
        }
      })}
    </div>
  );
}
