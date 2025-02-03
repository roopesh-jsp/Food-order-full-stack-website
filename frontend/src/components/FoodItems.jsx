import React from "react";
import FoodItem from "./FoodItem";
import { useCartData } from "../store/CartContext";

export default function FoodItems({ catogorey }) {
  const data = useCartData();

  return (
    <>
      {data.loading ? (
        <div className="loading">
          <h3>loading ... </h3>
          <p>
            please wait first render takes time because backend was hosted for
            free{" "}
          </p>
        </div>
      ) : (
        <div className="foodItems_container">
          {data.item?.map((item, idx) => {
            if (catogorey === "all" || catogorey === item.catogery) {
              return <FoodItem key={idx} data={item} />;
            }
          })}
        </div>
      )}
    </>
  );
}
