"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

import { Product } from "@/lib/types";

export default function ProductCard(props: Product) {
  const router = useRouter();

  const handleFavorite = (e: any) => {
    e.stopPropagation();
  };

  const handleNavigate = () => {
    router.push(`/product/${props.slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative z-0 group flex flex-col items-center flex-shrink-0 w-56 h-[360px] border rounded-md cursor-pointer bg-white border-gray-300 hover:shadow-md transition-all ease-linear overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-[2]">
        <div
          className="border bg-white hover:bg-gray-100 shadow rounded-full p-2"
          onClick={handleFavorite}
        >
          {false ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
        </div>
      </div>
      <div className="relative z-[-1] w-full flex overflow-hidden rounded-md pointer-events-none">
        <div className="relative w-full min-h-64 h-64">
          <Image
            fill
            src={props.src}
            alt={props.name}
            className="object-contain w-full h-full rounded-md group-hover:scale-110 transition-all ease-linear pointer-events-none"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-32 my-3 px-3">
        <div>
          <span className="text-black font-bold h-fit">{props.brand}</span>
          <span className="ml-2">{props.name}</span>
        </div>
        <div className="flex gap-1 mt-6">
          {props.price.discount ? (
            <>
              <span className="font-bold text-black/30 line-through">
                {props.price.current} $
              </span>
              <span className="font-bold text-green-600">
                {props.price.discount} $
              </span>
            </>
          ) : (
            <span className="font-bold text-green-600">
              {props.price.current} $
            </span>
          )}
        </div>
      </div>
      <div className="absolute flex flex-col top-2 left-2 gap-1">
        {props.badges.freeShipment && (
          <div className="flex items-center justify-start p-1 gap-2 w-[80px] bg-cyan-400/90 text-black font-bold rounded">
            <div className="min-w-[16px] ml-1">
              <BsTruck size={16} />
            </div>
            <span className="text-[8px]">FREE SHIPMENT</span>
          </div>
        )}
        {props.badges.fastDelivery && (
          <div className="flex items-center justify-start p-1 gap-2 w-[80px] bg-lime-400/90 text-black font-bold rounded">
            <div className="min-w-[16x] ml-1">
              <AiOutlineThunderbolt size={16} />
            </div>
            <span className="text-[8px]">FAST DELIVERY</span>
          </div>
        )}
      </div>
    </div>
  );
}
