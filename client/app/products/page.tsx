"use client";

import { useProducts } from "@/context/ProductsContext";

//Components
import ProductCard from "@/components/ProductCard";
import FilterTab from "@/components/Products/FilterTab";
import Sort from "@/components/Products/Sort";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton";

export default function ProductsPage() {
  const { productsResponse, isLoading } = useProducts();

  return (
    <div className="flex justify-center mx-auto gap-3 my-3">
      <FilterTab />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold">
            Showing {productsResponse.pageNumber * 1} -{" "}
            {productsResponse.pageNumber * productsResponse.pageSize} of{" "}
            {productsResponse.totalProducts} results
          </span>
          <Sort />
        </div>
        <div className="flex gap-3 flex-wrap">
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
