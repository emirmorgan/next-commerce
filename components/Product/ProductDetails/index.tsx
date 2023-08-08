"use client";

import { useState, useEffect } from "react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { products } from "@/lib/constants";
import { Product, ProductVariant } from "@/lib/types";

import Image from "next/image";
import AddToCart from "./AddToCart";
import VariantSelector from "./VariantSelector";

export default function ProductDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();

  const currentVariant = searchParams.get("v");
  const currentSize = searchParams.get("size");

  const [product, setProduct] = useState<Product | undefined>();
  const [variant, setVariant] = useState<ProductVariant | undefined>();
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

    if (Number(currentVariant) > product?.variants?.length) {
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
        <div className="relative aspect-square w-full max-h-[550px]">
          <Image
            fill
            src={
              product?.variants
                ? (variant?.image.src as string)
                : (product?.src as string)
            }
            alt={
              product?.variants
                ? (variant?.image.alt as string)
                : (product?.name as string)
            }
            className="object-contain pointer-events-none"
            sizes="(max-width: 480px), 70vw, 100vw"
            priority={true}
          />
          {product?.variants && (
            <div className="absolute flex w-full items-center justify-center bottom-6">
              <div className="flex items-center justify-center bg-neutral-100/80 border border-gray-400 text-neutral-500 rounded-full shadow-md gap-3">
                <div className="group p-2 cursor-pointer">
                  <AiOutlineLeft
                    size={20}
                    className="group-hover:text-neutral-700 group-hover:scale-105  transition-all ease-linear"
                  />
                </div>
                <div className="group p-2 cursor-pointer">
                  <AiOutlineRight
                    size={20}
                    className="group-hover:text-neutral-700 group-hover:scale-105 transition-all ease-linear"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-[1] flex-col border rounded-md p-4">
        <h1 className="text-[32px] font-extrabold">{product?.name}</h1>
        <div className="flex items-center justify-start text-xl text-gray-700 font-semibold mt-1">
          {product?.price.discount
            ? product?.price.discount
            : product?.price.current}{" "}
          USD
        </div>
        <div className="w-full h-[1px] my-5 rounded-full bg-neutral-200" />
        <VariantSelector
          product={product}
          variant={variant}
          currentVariant={currentVariant}
          currentSize={currentSize}
          setOption={setOption}
        />
        <AddToCart
          product={product as Product}
          variant={variant as ProductVariant}
          option={option as string}
          color={variant?.color as string}
        />
      </div>
    </div>
  );
}
