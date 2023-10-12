"use client";

import { AiFillFilter } from "react-icons/ai";
import { useState } from "react";

import { useProducts } from "@/context/ProductsContext";
import { useURLParams } from "@/context/ParamsContext";

//Components
import ProductCard from "@/components/ProductCard";
import FilterTab from "@/components/Products/FilterTab";
import Sort from "@/components/Products/Sort";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";
import MobileFilterTab from "@/components/Products/MobileFilterTab";

export default function ProductsPage() {
  const { q } = useURLParams();
  const { productsResponse, isLoading } = useProducts();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center mx-auto gap-3 my-3">
      <div className="hidden md:flex h-fit flex-col min-w-[250px] max-w-[250px] border border-gray-300">
        <div className="p-3">
          <span className="font-semibold">Filters</span>
        </div>
        <FilterTab />
      </div>
      <div className="flex flex-1 flex-col">
        {q && (
          <span className="font-semibold text-xl">{`"${q}" search shows ${productsResponse.totalProducts} results`}</span>
        )}
        <div className="flex flex-col justify-between items-center gap-2 sm:gap-0 sm:flex-row">
          <span className="font-semibold">
            Showing {productsResponse.pageNumber * 1} -{" "}
            {productsResponse.pageNumber * productsResponse.pageSize} of{" "}
            {productsResponse.totalProducts} results
          </span>
          <Sort />
        </div>
        <div className="grid justify-start grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-3 mt-3">
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
      </div>
      <MobileFilterTab isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(true)}
        className="fixed z-[10] bottom-[75px] flex justify-center items-center border-2 border-gray-400 bg-white text-black font-semibold select-none cursor-pointer px-4 py-2 gap-2 transition-all ease-linear hover:border-black md:hidden"
      >
        <AiFillFilter />
        <span>Filter</span>
      </div>
    </div>
  );
}
