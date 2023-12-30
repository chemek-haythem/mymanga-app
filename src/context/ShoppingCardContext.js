import React, { createContext, useState } from 'react';

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [stateValue, setStateValue] = useState(0);

  return (
    <ShoppingCardContext.Provider value={{ stateValue, setStateValue }}>
      {children}
    </ShoppingCardContext.Provider>
  );
};
