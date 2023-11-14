import Image from "next/image";

import { Product, ProductSimilar, ProductVariant } from "@/lib/types";
import { usePathname, useRouter } from "next/navigation";

type VariantSelectorProps = {
  product: Product;
  currentSize: string;
  currentColor: string;
};

export default function VariantSelector({
  product,
  currentSize,
  currentColor,
}: VariantSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (slug: string, id: number) => {
    const path = `/product/${slug}-p-` + id;
    router.replace(path, { scroll: false });
  };

  const handleColor = (color: string) => {
    router.replace(pathname + "?color=" + color, { scroll: false });
  };

  const handleSize = (size: string) => {
    router.replace(pathname + "?size=" + size, { scroll: false });
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        {product?.similarProducts?.map((similarProduct: ProductSimilar) => (
          <div
            key={similarProduct.id}
            onClick={() => handleRoute(similarProduct.slug, similarProduct.id)}
            className={
              "border-b-2 shadow ring-1 ring-gray-100 cursor-pointer overflow-hidden" +
              (similarProduct.id === product.id
                ? " border-black"
                : " hover:border-gray-300")
            }
          >
            <div className="relative w-24 h-24 select-none">
              <Image
                fill
                src={similarProduct.src}
                alt={similarProduct.alt}
                className="object-contain pointer-events-none"
                sizes="96px"
                priority={true}
              />
            </div>
          </div>
        ))}
      </div>
      {product?.variants &&
        product?.variants.some((variant) => variant.name == "Color") && (
          <div className="flex flex-col gap-2 mb-3">
            <span className="text-sm">COLOR</span>
            <div className="flex items-center text-black font-light gap-2 select-none cursor-pointer">
              {product?.variants
                ?.filter((p) => p.name === "Color")
                .map((variant: ProductVariant, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleColor(variant.value)}
                    className={
                      "border px-2 rounded-full hover:border-gray-700 transition-all ease-linear" +
                      (variant.value == currentColor
                        ? " border-gray-600 bg-black/5 hover:border-gray-800"
                        : "")
                    }
                  >
                    {variant.value}
                  </button>
                ))}
            </div>
          </div>
        )}
      {product?.variants &&
        product?.variants.some((variant) => variant.name == "Size") && (
          <div className="flex flex-col gap-2 mb-3">
            <span className="text-sm select-none">SIZE</span>
            <div className="flex items-center text-black font-light gap-2 select-none">
              {product?.variants
                ?.filter((p) => p.name === "Size")
                .map((variant: ProductVariant, index: number) => (
                  <button
                    key={index}
                    disabled={variant.quantity === 0}
                    onClick={() => handleSize(variant.value)}
                    className={
                      "flex items-center justify-center min-w-10 w-12 border px-2 enabled:hover:border-gray-700 enabled:hover:bg-black/5 disabled:cursor-not-allowed disabled:ring-1 disabled:ring-neutral-300 disabled:text-neutral-400 disabled:before:absolute disabled:before:h-px disabled:before:w-[36px] disabled:before:-rotate-45 disabled:before:bg-neutral-400 transition-all ease-linear" +
                      (variant.value == currentSize
                        ? " border-gray-600 bg-black/5 enabled:hover:border-gray-800"
                        : "")
                    }
                  >
                    {variant.value}
                  </button>
                ))}
            </div>
          </div>
        )}
    </>
  );
}
