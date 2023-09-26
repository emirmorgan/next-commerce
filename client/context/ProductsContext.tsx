"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import setCookies from "@/lib/setCookies";
import { ProductCardType } from "@/lib/types";

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
};

export function ProductsProvider({ children }: ProductsContextProvider) {
  const [products, setProducts] = useState<ProductCardType[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
