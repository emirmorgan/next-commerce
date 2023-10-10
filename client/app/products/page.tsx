"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useProducts } from "@/context/ProductsContext";

//Components
import ProductCard from "@/components/ProductCard";
import FilterTab from "@/components/Products/FilterTab";
import Sort from "@/components/Products/Sort";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";
import { useURLParams } from "@/context/ParamsContext";

export default function ProductsPage() {
  const params = useSearchParams();
  const { q } = useURLParams();
  const { productsResponse, isLoading, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [params]);

  return (
    <div className="flex justify-center mx-auto gap-3 my-3">
      <FilterTab params={params} />
      <div className="flex flex-1 flex-col">
        {q && (
          <span className="font-semibold text-xl">{`"${q}" search shows ${productsResponse.totalProducts} results`}</span>
        )}
        <div className="flex justify-between items-center">
          <span className="font-semibold">
            Showing {productsResponse.pageNumber * 1} -{" "}
            {productsResponse.pageNumber * productsResponse.pageSize} of{" "}
            {productsResponse.totalProducts} results
          </span>
          <Sort />
        </div>

        <div className="flex gap-3 flex-wrap mt-2">
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
                  alt="Product Image"
                  slug={product.slug}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  isFavorite={product.isFavorite}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
