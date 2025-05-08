import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isNavDark, setIsNavDark] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== "undefined") {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  return (
    <AppContext.Provider
      value={{ isNavDark, setIsNavDark, isDarkMode, setIsDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
