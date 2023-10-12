"use client";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useProducts } from "@/context/ProductsContext";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";

export default function Products() {
  const { productsResponse, isLoading } = useProducts();

  return (
    <section id="products">
      <article className="w-full px-5 my-5">
        <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-3">
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : productsResponse.products.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
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
        <div className="my-5 flex items-center justify-center">
          <Link href="./products">
            <div className="flex justify-center items-center text-gray-800 text-lg font-bold p-5 h-8 gap-2 border border-gray-300 hover:bg-gray-100 hover:border-black transition-all ease-linear">
              <span>Explore All</span>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
}
