import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isNavDark, setIsNavDark] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
