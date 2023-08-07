"use client";

import { createContext, useContext, useState } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";

import ShoppingCart from "@/components/Layout/ShoppingCart";

import { Cart, CartItem } from "@/lib/types";

type CartProvider = {
  children: React.ReactNode;
};

type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: number) => number;
  getSubtotal: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: Cart[];
  cartQuantity: number;
  addToCart: (product: CartItem) => void;
};

const ShoppingCartContext = createContext({} as CartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: CartProvider) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<Cart[]>("shop/cart", []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getSubtotal = cartItems?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(product: CartItem) {
    const cartItem = cartItems.find(
      (item) =>
        item.src === product.src &&
        item.size === product.size &&
        item.color === product.color
    );

    if (cartItem) return increaseQuantity(cartItem.id);

    setCartItems((items) => [
      ...items,
      Object.assign(product, { quantity: 1 }),
    ]);
  }

  function increaseQuantity(id: number) {
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

  function decreaseQuantity(id: number) {
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

  function removeItem(id: number) {
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
