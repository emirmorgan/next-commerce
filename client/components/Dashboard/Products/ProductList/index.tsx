"use client";

import { useProducts } from "@/context/ProductsContext";

import ProductsListItem from "./ProductListItem";
import ProductListSkeleton from "./Skeleton";
import PaginationBar from "@/components/PaginationBar";

export default function ProductList() {
  const { productsResponse, isLoading } = useProducts();

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <>
      <div className="flex flex-col border rounded mt-3">
        <div className="text-lg font-semibold border-b p-1">
          <h1>Products {`(${productsResponse.totalProducts})`}</h1>
        </div>
        <ul>
          {productsResponse.totalProducts === 0 && (
            <li className="flex justify-center items-center font-semibold text-lg p-3">
              <span>😵 Couldn&apos;t find any product.</span>
            </li>
          )}
          {productsResponse.products.map((product) => {
            return (
              <ProductsListItem
                key={product.id}
                id={product.id}
                name={product.name}
                src={product.src}
                alt={product.alt}
                slug={product.slug}
                price={product.price}
                discountPrice={product.discountPrice}
                quantity={product.quantity}
              />
            );
          })}
        </ul>
      </div>
      <PaginationBar
        totalItems={productsResponse.totalProducts}
        pageSize={productsResponse.pageSize}
        pageNumber={productsResponse.pageNumber}
      />
    </>
  );
}
