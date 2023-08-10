import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Product, ProductVariant } from "@/lib/types";

import { useState, useEffect } from "react";

import Image from "next/image";

type GalleryProps = {
  product: Product;
  variant: ProductVariant;
};

export default function Gallery({ product, variant }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(variant?.images[0].src);

  useEffect(() => {
    setActiveImage(variant?.images[0].src);
    setCurrentIndex(0);
  }, [variant]);

  const handleImage = (index: number) => {
    setActiveImage(variant?.images[index].src);
    setCurrentIndex(index);
  };

  const moveForward = () => {
    if (currentIndex < variant?.images.length - 1) {
      setActiveImage(variant?.images[currentIndex + 1].src);
      setCurrentIndex((index) => index + 1);
    } else {
      setActiveImage(variant?.images[0].src);
      setCurrentIndex(0);
    }
  };

  const moveBackward = () => {
    if (currentIndex === 0) {
      setActiveImage(variant?.images[variant?.images.length - 1].src);
      setCurrentIndex(variant?.images.length - 1);
    } else {
      setActiveImage(variant?.images[currentIndex - 1].src);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative aspect-square max-h-[600px] w-full h-full overflow-hidden">
      <Image
        fill
        src={product?.variants ? activeImage : (product?.src as string)}
        alt={product?.variants ? activeImage : (product?.name as string)}
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
                onClick={moveBackward}
                className="group-hover:text-neutral-700 group-hover:scale-105  transition-all ease-linear"
              />
            </div>
            <div className="group p-2 cursor-pointer">
              <AiOutlineRight
                size={20}
                onClick={moveForward}
                className="group-hover:text-neutral-700 group-hover:scale-105 transition-all ease-linear"
              />
            </div>
          </div>
        </div>
      )}
      {product?.variants && (
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {variant?.images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImage(index)}
              className={
                "relative w-20 aspect-square border hover:border-black cursor-pointer select-none" +
                (activeImage === image.src ? " border-black" : "")
              }
            >
              <Image
                fill
                src={image.src}
                alt={image.alt}
                className="object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
