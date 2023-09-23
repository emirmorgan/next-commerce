"use client";

import { AiFillHeart, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "@/components/ProductCard";

import { useFavorites } from "@/context/FavoritesContext";
import { Favorite } from "@/lib/types";

export default function FavoritesPage() {
  const router = useRouter();
  const { favorites, getFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (favorites === null || undefined) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 my-3 h-[200px]">
        <div className="text-red-500">
          <AiFillHeart size={42} />
        </div>
        <h1 className="text-lg font-semibold">
          We couldn&apos;t find any favorite product.
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center font-semibold border-2 border-black bg-black/5 p-2 gap-2 hover:bg-black/10 transition-all ease-linear"
        >
          <span>Explore Products</span>
          <AiOutlineRight size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-3 my-3 flex-wrap">
      {favorites.map((favorite: Favorite, index: number) => (
        <ProductCard
          key={index}
          brand={favorite.brand}
          name={favorite.name}
          slug={favorite.slug}
          src={favorite.src}
          alt={favorite.alt}
          price={favorite.price}
          discountPrice={favorite.discountPrice}
        >
          {favorite.brand}
        </ProductCard>
      ))}
    </div>
  );
}
