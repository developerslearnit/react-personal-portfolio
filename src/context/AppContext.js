import React, { createContext, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [name, setName] = useState("John Doe");
  return <Context.Provider value={{ name }}>{children}</Context.Provider>;
};

export const useAppContext = () => React.useContext(Context);
