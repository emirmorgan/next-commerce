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

  if (!images) {
    return (
      <div
        role="status"
        className="flex items-center justify-center h-full w-full min-h-[250px] bg-gray-300 animate-pulse"
      >
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative aspect-square max-h-[600px] w-full h-full overflow-hidden select-none">
      <Image
        fill
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="object-contain pointer-events-none"
        sizes="(max-width: 480px), 70vw, 100vw"
        priority={true}
      />
      {images.length > 1 && (
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
        {images.map((image, index) => (
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
