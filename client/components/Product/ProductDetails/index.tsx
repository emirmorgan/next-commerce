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
import Link from "next/link";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, currentVariant]);

  return (
    <>
      <div className="flex gap-2 mb-2 text-gray-600 select-none">
        <Link href="/">
          <span className="hover:text-gray-900 hover:underline">Homepage</span>
        </Link>
        <span>/</span>
        <Link href="/">
          <span className="hover:text-gray-900 hover:underline">
            {product?.brand}
          </span>
        </Link>
        <span>/</span>
        <Link href="/">
          <span className="hover:text-gray-900 hover:underline">
            {product?.category}
          </span>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex-[2] border">
          <Gallery
            variant={variant as ProductVariant}
            product={product as Product}
          />
        </div>
        <div className="flex flex-[1] flex-col border">
          <div className="p-4 select-none">
            <h1 className="text-[32px] font-extrabold">{product?.name}</h1>
            <div className="flex items-center justify-start text-xl text-gray-700 font-semibold mt-1">
              {product?.price ? product?.discountPrice : product?.price} USD
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
    </>
  );
}
