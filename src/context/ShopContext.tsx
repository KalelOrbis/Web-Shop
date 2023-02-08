import { createContext, ReactNode, useState } from "react";
import { PRODUCTS } from "../Products";
export const ShopContext = createContext<IShopContextProvider>({
  cartItems: { 1: 0 },
  addToCart: (itemId: number) => {},
  removeFromCart: (itemId: number) => {},
});

interface IShopContextProps {
  children: ReactNode;
}
interface IShopContextProvider {
  cartItems: ICart;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}
interface ICart {
  [itemId: number]: number;
}

const getDefaultCart = () => {
  let cart: ICart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i + 1] = 0;
  }
  return cart;
};
export function ShopContextProvider(props: IShopContextProps) {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId: number) => {
    setCartItems((prev: ICart) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: ICart) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const contextvalue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
}
