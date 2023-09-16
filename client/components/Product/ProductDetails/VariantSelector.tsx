import { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Product, ProductVariant } from "@/lib/types";

type VariantSelectorProps = {
  product: Product;
  variant: ProductVariant;
  currentVariant: string;
  currentSize: string;
  setOption: Dispatch<SetStateAction<string>>;
};

export default function VariantSelector({
  product,
  variant,
  currentVariant,
  currentSize,
  setOption,
}: VariantSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleVariant = (index: number) => {
    if (index != Number(currentVariant)) {
      router.push(pathname + "?v=" + index, { scroll: false });
    }
  };

  const handleOption = (size: string) => {
    const option = variant?.options.find((option) => option.option == size);

    if (option?.quantity !== 0) {
      router.push(pathname + "?v=" + currentVariant + "&size=" + size, {
        scroll: false,
      });

      setOption(size);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        {!variant?.color &&
          product?.variants?.map((item, index) => (
            <div
              onClick={() => handleVariant(index + 1)}
              className={
                "border-b-2 shadow ring-1 ring-gray-100 cursor-pointer overflow-hidden" +
                (currentVariant === String(index + 1)
                  ? " border-black"
                  : " hover:border-gray-300")
              }
              key={index}
            >
              <div className="relative w-24 h-24 select-none">
                <Image
                  fill
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  className="object-contain pointer-events-none"
                  sizes="96px"
                  priority={true}
                />
              </div>
            </div>
          ))}
      </div>
      {variant?.color && (
        <div className="flex flex-col gap-2 mb-3">
          <span className="text-sm">COLOR</span>
          <div className="flex items-center text-black font-light gap-2 select-none cursor-pointer">
            {product?.variants?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleVariant(index + 1)}
                className={
                  "border px-2 rounded-full hover:border-gray-700 transition-all ease-linear" +
                  (item.color == variant.color
                    ? " border-gray-600 bg-black/5 hover:border-gray-800"
                    : "")
                }
              >
                {item.color}
              </button>
            ))}
          </div>
        </div>
      )}
      {variant?.options && (
        <div className="flex flex-col gap-2 mb-3">
          <span className="text-sm select-none">SIZE</span>
          <div className="flex items-center text-black font-light gap-2 select-none">
            {variant.options.map((option, index) => (
              <button
                key={index}
                disabled={option.quantity === 0}
                onClick={() => handleOption(option.option)}
                className={
                  "flex items-center justify-center min-w-10 w-12 border px-2 enabled:hover:border-gray-700 enabled:hover:bg-black/5 disabled:cursor-not-allowed disabled:ring-1 disabled:ring-neutral-300 disabled:text-neutral-400 disabled:before:absolute disabled:before:h-px disabled:before:w-[36px] disabled:before:-rotate-45 disabled:before:bg-neutral-400 transition-all ease-linear" +
                  (option.option == currentSize
                    ? " border-gray-600 bg-black/5 enabled:hover:border-gray-800"
                    : "")
                }
              >
                {option.option}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
