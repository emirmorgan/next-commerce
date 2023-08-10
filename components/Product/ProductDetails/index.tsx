"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";

import { products } from "@/lib/constants";
import { Product, ProductVariant } from "@/lib/types";

import AddToCart from "./AddToCart";
import VariantSelector from "./VariantSelector";
import DetailsTab from "./DetailsTab";
import Gallery from "./Gallery";

export default function ProductDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();

  const currentVariant = searchParams.get("v");
  const currentSize = searchParams.get("size");

  const [product, setProduct] = useState<Product>();
  const [variant, setVariant] = useState<ProductVariant>();
  const [option, setOption] = useState<string | null>(null);

  useEffect(() => {
    const product = products.find((product) => product.slug === params.slug);

    product ? setProduct(product) : router.push("/");
  }, [params.slug]);

  useEffect(() => {
    if (product?.variants && !searchParams.has("v")) {
      setVariant(product?.variants[0]);
      router.push(pathname + "?v=1");
    }

    if (Number(currentVariant) > Number(product?.variants?.length)) {
      router.push("/");
    }

    if (product?.variants) {
      setVariant(product?.variants[Number(currentVariant) - 1]);
    }

    setOption(null);
  }, [product, currentVariant]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-[2] border rounded-md">
        <Gallery
          variant={variant as ProductVariant}
          product={product as Product}
        />
      </div>
      <div className="flex flex-[1] flex-col border rounded-md">
        <div className="p-4">
          <h1 className="text-[32px] font-extrabold">{product?.name}</h1>
          <div className="flex items-center justify-start text-xl text-gray-700 font-semibold mt-1">
            {product?.price.discount
              ? product?.price.discount
              : product?.price.current}{" "}
            USD
          </div>
        </div>
        <div className="w-full h-[1px] rounded-full bg-neutral-200" />
        <div className="flex flex-col p-4">
          <VariantSelector
            product={product as Product}
            variant={variant as ProductVariant}
            currentVariant={currentVariant as string}
            currentSize={currentSize as string}
            setOption={setOption as Dispatch<SetStateAction<string>>}
          />
          <AddToCart
            product={product as Product}
            variant={variant as ProductVariant}
            option={option as string}
            color={variant?.color as string}
          />
        </div>
        <DetailsTab product={product as Product} />
      </div>
    </div>
  );
}
