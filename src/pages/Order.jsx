import React from "react";
import { useCartData } from "../store/CartContext";

export default function Order() {
  const { getTotal } = useCartData();
  return (
    <div id="order">
      <div className="order_left">
        <h2>Delivery information</h2>
        <form>
          <div className="order_grp">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <input type="text" placeholder="email address" />
          <input type="text" placeholder="street" />
          <div className="order_grp">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
          </div>
          <div className="order_grp">
            <input type="text" placeholder="zip code" />
            <input type="text" placeholder="country" />
          </div>
          <input type="text" placeholder="number" />
        </form>
      </div>
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

        <button>pay now</button>
      </div>
    </div>
  );
}
