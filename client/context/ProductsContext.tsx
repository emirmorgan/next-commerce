"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import setCookies from "@/lib/setCookies";
import { ProductCardType } from "@/lib/types";
import { useAuth } from "./AuthContext";

export const ProductsContext = createContext({} as IProductsContext);

export function useProducts() {
  return useContext(ProductsContext);
}

type ProductsContextProvider = {
  children: React.ReactNode;
};

type IProductsContext = {
  products: ProductCardType[];
  fetchProducts: () => void;
  updateFavorites: (type: string, productId: number) => void;
};

export function ProductsProvider({ children }: ProductsContextProvider) {
  const { user } = useAuth();
  const [products, setProducts] = useState<ProductCardType[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [user]);

  async function fetchProducts() {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });
      if (!token) {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/products")
          .then((response) => {
            setProducts(response.data);
          });
      } else {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/products/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setProducts(response.data);
          });
      }
    } catch (error) {}
  }

  async function updateFavorites(type: string, productId: number) {
    const token = await setCookies({ type: "GET", tag: "token", data: "" });

    if (type === "add") {
      axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/favorites/add/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else if (type === "delete") {
      axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/favorites/delete/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, fetchProducts, updateFavorites }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
