import React from "react";
import { assets } from "../assets/assets";
import { useCartData } from "../store/CartContext";
import { useAppContext } from "../store/AppContext";

export default function FoodItem({ data }) {
  const { cartItems, addToCart, removeFromCart } = useCartData();
  const { backendUrl } = useAppContext();
  return (
    <div className="food_item">
      <div className="food_item_img">
        <img src={`${backendUrl}/images/${data.image}`} alt={data.name} />
        <div className="food_item_cta">
          {cartItems[data._id] ? (
            <div className="food_item_cta_add_remove">
              <img
                src={assets.remove_icon_red}
                alt=""
                onClick={() => removeFromCart(data._id)}
              />
              <p>{cartItems[data._id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => addToCart(data._id)}
              />
            </div>
          ) : (
            <div className="food_item_cta_add">
              <img
                src={assets.add_icon_white}
                alt=""
                onClick={() => addToCart(data._id)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="food_item_name_star_ratting">
        <h2>{data.name}</h2>
        <img src={assets.rating_starts} alt="" />
      </div>
      <div className="food_item_desc">
        <p>{data.discription}</p>
      </div>
      <div className="food_item_price">
        <h4>{data.price} $</h4>
      </div>
    </div>
  );
}
