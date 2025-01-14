import React from "react";
import { useCartData } from "../store/CartContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export default function Cart() {
  const { item, cartItems, removeFromCart, getTotal } = useCartData();
  const { backendUrl } = useAppContext();
  return (
    <div id="cart">
      <div className="cart_items_title cart_table">
        <p>item</p>
        <p>title</p>
        <p>$</p>
        <p>Q</p>
        <p>T</p>
        <p>X</p>
      </div>
      <br />
      <hr />

      {Object.keys(cartItems).length === 0 ? (
        <h3 className="fallback"> no items in cart</h3>
      ) : (
        <>
          <div className="cart_items ">
            {item.map((ele, idx) => {
              if (cartItems[ele._id] > 0) {
                return (
                  <div key={ele._id}>
                    <div className="cart_item cart_table">
                      <p>
                        <img src={`${backendUrl}/images/${ele.image}`} alt="" />
                      </p>
                      <p>{ele.name}</p>
                      <p>${ele.price}</p>
                      <p>{cartItems[ele._id]}</p>
                      <p>${ele.price * cartItems[ele._id]}</p>
                      <p
                        className="cross"
                        onClick={() => removeFromCart(ele._id)}
                      >
                        <img src={assets.cross_icon} alt="" />
                      </p>
                    </div>
                    {/* <hr /> */}
                  </div>
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
        </>
      )}
    </div>
  );
}
