import { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Product, ProductVariant } from "@/lib/types";

type VariantSelectorProps = {
  product: Product | undefined;
  variant: ProductVariant | undefined;
  currentVariant: string | null;
  currentSize: string | null;
  setOption: Dispatch<SetStateAction<string | null>>;
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
      <div className="flex gap-2 mb-3">
        {!variant?.color &&
          product?.variants?.map((item, index) => (
            <div
              onClick={() => handleVariant(index + 1)}
              className={
                "border-2 rounded-lg cursor-pointer overflow-hidden hover:scale-105 hover:border-green-300 transition-all ease-linear" +
                (currentVariant === String(index + 1)
                  ? " border-green-500"
                  : "")
              }
              key={index}
            >
              <div className="relative w-24 h-24">
                <Image
                  fill
                  src={item.image.src}
                  alt={item.image.alt}
                  className="object-contain"
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
                  "bg-neutral-100 border px-2 rounded-full hover:border-neutral-400 transition-all ease-linear" +
                  (item.color == variant.color
                    ? " border-green-600 bg-green-300/30 hover:border-green-700"
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
          <span className="text-sm">SIZE</span>
          <div className="flex items-center text-black font-light gap-2 select-none cursor-pointer">
            {variant.options.map((option, index) => (
              <button
                key={index}
                disabled={option.quantity === 0}
                onClick={() => handleOption(option.option)}
                className={
                  "flex items-center justify-center min-w-10 w-12 bg-neutral-100 border px-2 rounded-full enabled:hover:border-neutral-400 disabled:cursor-not-allowed disabled:ring-1 disabled:ring-neutral-300 disabled:text-neutral-400 disabled:before:absolute disabled:before:h-px disabled:before:w-[36px] disabled:before:-rotate-45 disabled:before:bg-neutral-400 transition-all ease-linear" +
                  (option.option == currentSize
                    ? " border-green-600 bg-green-300/30 enabled:hover:border-green-700"
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
