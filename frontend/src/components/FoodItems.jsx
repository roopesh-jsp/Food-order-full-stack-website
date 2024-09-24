import React from "react";
import FoodItem from "./FoodItem";
import { useCartData } from "../store/CartContext";

export default function FoodItems({ catogorey }) {
  const data = useCartData();

  return (
    <div className="foodItems_container">
      {data.item.map((item, idx) => {
        if (catogorey === "all" || catogorey === item.catogery) {
          return <FoodItem key={idx} data={item} />;
        }
      })}
    </div>
  );
}
