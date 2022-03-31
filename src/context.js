import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNavDark, setIsNavDark] = useState(false)

  return (
    <AppContext.Provider value={{ isNavDark, setIsNavDark }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
