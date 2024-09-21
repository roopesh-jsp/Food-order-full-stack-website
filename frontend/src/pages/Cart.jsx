import React from "react";
import { useCartData } from "../store/CartContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Cart() {
  const { item, cartItems, removeFromCart, getTotal } = useCartData();
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
      <div className="cart_bottom">
        <div className="cart_left">
          <h2>cart total</h2>
          <div className="cart_left_item">
            <p>subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <hr />
          <div className="cart_left_item">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart_left_item_toal cart_left_item">
            <p>total</p>
            <p>${getTotal() + 2}</p>
          </div>
          <Link to="/order">
            <button>Proceed to checkout</button>
          </Link>
        </div>

        <div className="cart_right">
          <p>if you have a promo code, enter it here</p>
          <div className="promocode">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
