"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  const [theme, setTheme] = useState("");

  return (
    <GlobalContext.Provider value={{theme, setTheme}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
