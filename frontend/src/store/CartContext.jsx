import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { useAppContext } from "./AppContext";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { backendUrl } = useAppContext();
  const [cartItems, setCartItems] = useState({});
  const [food_list, setMenu] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  async function addToCart(id) {
    setCartItems((prev) => {
      if (!prev[id]) {
        return { ...prev, [id]: 1 };
      } else {
        return { ...prev, [id]: prev[id] + 1 };
      }
    });
    const res = await axios.post(
      backendUrl + "/cart/add",
      { itemId: id },
      { headers: { token: localStorage.getItem("token") } }
    );
  }
  async function removeFromCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
    const res = await axios.post(
      backendUrl + "/cart/remove",
      { itemId: id },
      { headers: { token: localStorage.getItem("token") } }
    );
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
  async function getMenu() {
    setLoading(true);
    const res = await axios.get(backendUrl + "/admin/all");
    setMenu(res.data.items);
    setLoading(false);
  }
  async function getCart() {
    const cart = await axios.post(
      backendUrl + "/cart/",
      {},
      { headers: { token: localStorage.getItem("token") } }
    );

    if (cart.data.success) {
      setCartItems(cart.data.cartData);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    getMenu();
    getCart();
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
    loading,
  };
  return <cartContext.Provider value={ctxVal}>{children}</cartContext.Provider>;
};

export const useCartData = () => {
  const data = useContext(cartContext);
  return data;
};
