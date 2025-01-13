import { createContext, useContext } from "react";

const AppContext = createContext({
  backendUrl: "",
});

export default function AppContextProvider({ children }) {
  const backendUrl = import.meta.env.VITE_BACKENDURL;
  const ctxVal = {
    backendUrl,
  };
  return <AppContext.Provider value={ctxVal}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
