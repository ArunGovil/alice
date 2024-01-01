import { createContext, useContext } from "react";
import theme from "../tokens/theme";

const SarahContext = createContext({});

const SarahProvider = ({ children }) => {
  return (
    <SarahContext.Provider value={theme}>{children}</SarahContext.Provider>
  );
};

const useTheme = () => {
  return useContext(SarahContext);
};

export { SarahContext, SarahProvider, useTheme };
