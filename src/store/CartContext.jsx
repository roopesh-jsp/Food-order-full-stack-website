import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
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
  const ctxVal = {
    item: food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return <cartContext.Provider value={ctxVal}>{children}</cartContext.Provider>;
};

export const useCartData = () => {
  const data = useContext(cartContext);
  return data;
};
