"use client";

import { createContext, useContext, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import ShoppingCart from "../components/Layout/ShoppingCart";

type CartProvider = {
  children: React.ReactNode;
};

type CartItem = {
  id: string;
  brand: string;
  name: string;
  src: string;
  price: number;
  color?: string;
  size?: string;
  quantity: number;
};

type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: string) => number;
  getSubtotal: number;
  increaseQuantity: (id: striWng) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  cartItems: CartItem[];
  cartQuantity: number;
  addToCart: (product: CartItem) => void;
};

const ShoppingCartContext = createContext({} as CartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: CartProvider) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shop/cart",
    []
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getSubtotal = cartItems?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function getQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(product: CartItem) {
    if (cartItems.find((item) => item.id === product.id) == null) {
      setCartItems((items) => [
        ...items,
        Object.assign(product, { quantity: 1 }),
      ]);
    } else {
      increaseQuantity(product.id);
    }
  }

  function increaseQuantity(id: string) {
    // @ts-ignore
    setCartItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }

  function decreaseQuantity(id: string) {
    setCartItems((items) => {
      // Delete if product falls below one.
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: string) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getQuantity,
        getSubtotal,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        addToCart,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
