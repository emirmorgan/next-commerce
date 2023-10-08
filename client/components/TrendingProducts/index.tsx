"use client";

import Scrollable from "../Scrollable";
import ProductCard from "../ProductCard";

import { useProducts } from "@/context/ProductsContext";

export default function TrendingProducts() {
  const { productsResponse } = useProducts();

  return (
    <section id="trending">
      <article className="w-full px-5 my-3">
        <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
          Trending Products
        </h1>
        <Scrollable dragging={true}>
          {productsResponse.products.map((product) => (
            <ProductCard
              id={product.id}
              key={crypto.randomUUID()}
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
        </Scrollable>
      </article>
    </section>
  );
}
