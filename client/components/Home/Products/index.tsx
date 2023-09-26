"use client";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useProducts } from "@/context/ProductsContext";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const { products } = useProducts();

  return (
    <section id="products">
      <article className="w-full px-5 my-5">
        <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-3 flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={crypto.randomUUID()}
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
        <div className="my-5 flex items-center justify-center">
          <Link href="./">
            <div className="flex justify-center items-center text-lg font-bold p-5 h-8 border-2 border-gray-200 text-green-600 gap-2 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all ease-linear">
              <span>Explore All</span>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
}
