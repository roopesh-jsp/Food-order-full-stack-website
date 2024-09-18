import { createContext, useContext } from "react";
import { food_list } from "../assets/assets";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const ctxVal = {
    item: food_list,
  };
  return <cartContext.Provider value={ctxVal}>{children}</cartContext.Provider>;
};

export const useCartData = () => {
  const data = useContext(cartContext);
  return data;
};
