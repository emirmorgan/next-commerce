"use client";

import { useProducts } from "@/context/ProductsContext";

import ProductCard from "@/components/Home/ProductCard";
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function FavoritesPage() {
  const router = useRouter();
  const { productsResponse } = useProducts();

  const favoriteProducts = productsResponse.products.filter(
    (f) => f.isFavorite === true
  );

  const handleRoute = () => {
    router.push("/products");
  };

  if (!favoriteProducts || favoriteProducts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center font-semibold select-none gap-3 my-5">
        <AiFillHeart size={42} />
        <span>Couldn&apos;t find any favorite product.</span>
        <div
          onClick={handleRoute}
          className="flex justify-center items-center border border-gray-300 cursor-pointer transition-all ease-linear px-4 py-2 gap-2 hover:border-black"
        >
          <span>Explore Products</span>
          <AiOutlineArrowRight />
        </div>
      </div>
    );
  }

  return (
    <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-3 my-4">
      {favoriteProducts.map((product) => (
        <ProductCard
          key={crypto.randomUUID()}
          id={product.id}
          brand={product.brand}
          name={product.name}
          src={product.src}
          alt={product.alt}
          slug={product.slug}
          price={product.price}
          discountPrice={product.discountPrice}
          isFavorite={product.isFavorite}
        />
      ))}
    </div>
  );
}
