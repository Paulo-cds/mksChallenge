import React, { ReactNode, createContext, useState } from "react";
import { ProductAdd } from "./interfaces";

interface ContextType {
  cartItems: ProductAdd[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductAdd[]>>;
}

const Context = createContext<ContextType | undefined>(undefined)

interface ProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductAdd[]>([]);

  return (
    <Context.Provider
      value={{cartItems, setCartItems}}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
