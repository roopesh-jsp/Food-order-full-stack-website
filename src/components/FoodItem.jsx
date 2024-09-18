import React from "react";
import { assets } from "../assets/assets";

export default function FoodItem({ data }) {
  console.log(data);

  return (
    <div className="food_item">
      <div className="food_item_img">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="food_item_name_star_ratting">
        <h2>{data.name}</h2>
        <img src={assets.rating_starts} alt="" />
      </div>
      <div className="food_item_desc">
        <p>{data.description}</p>
      </div>
      <div className="food_item_price">
        <h4>{data.price} $</h4>
      </div>
    </div>
  );
}
