"use client";

import { useProducts } from "@/context/ProductsContext";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const { products } = useProducts();

  return (
    <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-3 my-3 flex-wrap">
      {products
        .filter((f) => f.isFavorite === true)
        .map((product) => (
          <ProductCard
            key={crypto.randomUUID()}
            id={product.id}
            brand={product.brand}
            name={product.name}
            src={product.src}
            alt="Product Image"
            slug={product.slug}
            price={product.price}
            discountPrice={product.discountPrice}
            isFavorite={product.isFavorite}
          />
        ))}
    </div>
  );
}
