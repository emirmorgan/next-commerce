"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

import { useProducts } from "@/context/ProductsContext";

//Components
import ProductCard from "@/components/ProductCard";
import FilterTab from "@/components/Products/FilterTab";
import Sort from "@/components/Products/Sort";

export default function ProductsPage() {
  const { products } = useProducts();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") as string;
  const currentSubcategory = searchParams.get("subcategory") as string;
  const currentColor = searchParams.get("color") as string;

  const priceFrom = searchParams.get("priceFrom") as string;
  const priceTo = searchParams.get("priceTo") as string;

  const sort = searchParams.get("sort") as string;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex justify-center mx-auto gap-3 my-3">
      <FilterTab
        currentCategory={currentCategory}
        currentSubcategory={currentSubcategory}
        currentColor={currentColor}
        createQueryString={createQueryString}
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Showing 1 - 20 of 111 results</span>
          <Sort sort={sort} createQueryString={createQueryString} />
        </div>
        <div className="flex gap-3 flex-wrap">
          {products.map((product) => (
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
      </div>
    </div>
  );
}
