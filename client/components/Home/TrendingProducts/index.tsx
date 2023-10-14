"use client";

import { useProducts } from "@/context/ProductsContext";

import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCard/Skeleton";
import Scrollable from "@/components/Scrollable";

export default function TrendingProducts() {
  const { productsResponse, isLoading } = useProducts();

  return (
    <section id="trending">
      <article className="w-full px-5 my-3">
        <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
          Trending Products
        </h1>
        <Scrollable dragging={true}>
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : productsResponse.products.map((product) => (
                <div key={product.id} className="min-w-[230px]">
                  <ProductCard
                    id={product.id}
                    brand={product.brand}
                    name={product.name}
                    src={product.src}
                    alt={product.src}
                    slug={product.slug}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    isFavorite={product.isFavorite}
                  />
                </div>
              ))}
        </Scrollable>
      </article>
    </section>
  );
}
