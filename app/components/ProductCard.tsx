import Image from "next/image";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

interface ProductCardTypes {
  brand: string;
  name: string;
  src: string;
  price: number;
  discount: {
    isAvailable: boolean;
    discountPrice: number;
  };
  freeShipment: boolean;
  fastDelivery: boolean;
}

export default function ProductCard({
  brand,
  name,
  src,
  price,
  discount,
  freeShipment,
  fastDelivery,
}: ProductCardTypes) {
  return (
    <div className="relative z-0 group flex flex-col items-center flex-shrink-0 w-56 h-[360px] border rounded-md cursor-pointer bg-white border-gray-300">
      <div className="relative z-[-1] flex h-56 overflow-hidden w-full rounded-md">
        <Image
          fill
          src={src}
          alt={name}
          className="object-contain rounded-md group-hover:scale-110 transition-all ease-linear pointer-events-none"
        />
      </div>
      <div className="flex flex-col py-2 px-3">
        <div>
          <span className="text-black font-bold h-fit">{brand}</span>
          <span className="ml-2">{name}</span>
        </div>
        <div className="flex gap-1 mt-6">
          {discount.isAvailable && (
            <span className="text-gray-600 line-through">
              {discount.discountPrice} $
            </span>
          )}
          <span className="font-bold text-green-600">{price} $</span>
        </div>
      </div>
      <div className="absolute flex flex-col top-2 left-2 gap-2">
        {freeShipment && (
          <div className="flex items-center h-6 p-1 gap-1 bg-green-400 text-black font-bold rounded">
            <BsTruck size={20} />
            <span className="text-xs">FREE SHIPMENT</span>
          </div>
        )}
        {fastDelivery && (
          <div className="flex items-center h-6 p-1 gap-1 bg-yellow-400 text-black font-bold rounded">
            <AiOutlineThunderbolt size={20} />
            <span className="text-xs">FAST DELIVERY</span>
          </div>
        )}
      </div>
    </div>
  );
}
