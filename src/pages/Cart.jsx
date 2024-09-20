import React from "react";
import { useCartData } from "../store/CartContext";
import { assets } from "../assets/assets";

export default function Cart() {
  const { item, cartItems, removeFromCart } = useCartData();
  return (
    <div id="cart">
      <div className="cart_items_title cart_table">
        <p>item</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <br />
      <hr />
      <div className="cart_items ">
        {item.map((ele, idx) => {
          if (cartItems[ele._id] > 0) {
            return (
              <>
                <div className="cart_item cart_table">
                  <p>
                    <img src={ele.image} alt="" />
                  </p>
                  <p>{ele.name}</p>
                  <p>${ele.price}</p>
                  <p>{cartItems[ele._id]}</p>
                  <p>${ele.price * cartItems[ele._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(ele._id)}>
                    <img src={assets.cross_icon} alt="" />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
