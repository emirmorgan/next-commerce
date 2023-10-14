import { useState } from "react";
import Image from "next/image";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { ProductImages } from "@/lib/types";

type GalleryProps = {
  images: ProductImages[];
};

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImage = (index: number) => {
    setCurrentIndex(index);
  };

  const moveForward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((index) => index + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const moveBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative aspect-square max-h-[600px] w-full h-full overflow-hidden select-none">
      <Image
        fill
        src={images ? images[currentIndex].src : "/assets/logo.png"}
        alt={images ? images[currentIndex].alt : "Image"}
        className="object-contain pointer-events-none"
        sizes="(max-width: 480px), 70vw, 100vw"
        priority={true}
      />
      {images?.length > 1 && (
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
      <div className="absolute top-2 left-2 hidden flex-col gap-2 sm:flex">
        {images?.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImage(index)}
            className={
              "relative w-20 aspect-square border hover:border-black cursor-pointer select-none" +
              (images[currentIndex].src === image.src ? " border-black" : "")
            }
          >
            <Image
              fill
              src={image.src}
              alt={image.alt}
              className="object-cover pointer-events-none"
              priority={true}
              sizes="(max-width: 380px), 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
