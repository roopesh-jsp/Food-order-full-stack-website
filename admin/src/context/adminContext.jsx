import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext({
  atoken: "",
  setAToken: () => {},
  backendUrl: "",
});

export const AdminContextProvider = ({ children }) => {
  const [atoken, setAToken] = useState(localStorage.getItem("atoken"));
  const backendUrl = import.meta.env.VITE_BACKENDURL;

  console.log(backendUrl);

  useEffect(() => {
    if (localStorage.getItem("atoken")) {
      setAToken(localStorage.getItem("atoken"));
    }
  }, []);
  const ctxVal = {
    atoken,
    setAToken,
    backendUrl,
  };
  return (
    <AdminContext.Provider value={ctxVal}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
