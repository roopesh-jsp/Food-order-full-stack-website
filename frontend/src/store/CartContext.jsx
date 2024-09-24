import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(null);

  function addToCart(id) {
    setCartItems((prev) => {
      if (!prev[id]) {
        return { ...prev, [id]: 1 };
      } else {
        return { ...prev, [id]: prev[id] + 1 };
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  }
  function getTotal() {
    let total = 0;
    for (const item of food_list) {
      if (cartItems[item._id] > 0) {
        total += cartItems[item._id] * item.price;
      }
    }
    return total;
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  const ctxVal = {
    item: food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotal,
    token,
    setToken,
  };
  return <cartContext.Provider value={ctxVal}>{children}</cartContext.Provider>;
};

export const useCartData = () => {
  const data = useContext(cartContext);
  return data;
};
