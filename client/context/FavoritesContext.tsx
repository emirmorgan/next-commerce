"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

import setCookies from "@/lib/setCookies";
import { Favorite } from "@/lib/types";

export const FavoritesContext = createContext({} as IFavoritesContext);

export function useFavorites() {
  return useContext(FavoritesContext);
}

type FavoritesContextProvider = {
  children: React.ReactNode;
};

type IFavoritesContext = {
  favorites: Favorite[];
  getFavorites: () => void;
};

export function FavoritesProvider({ children }: FavoritesContextProvider) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  async function getFavorites() {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/user/favorites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("go", response.data);

          setFavorites(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, getFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
