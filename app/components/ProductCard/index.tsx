import Image from "next/image";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

import { ProductCardProps, ProductCardPropsDefault } from "./productCardProps";

export default function ProductCard(userProps: ProductCardProps) {
  const props: Required<ProductCardProps> = {
    ...ProductCardPropsDefault,
    ...userProps,
  };

  return (
    <div className="relative z-0 group flex flex-col items-center flex-shrink-0 w-56 h-[360px] border rounded-md cursor-pointer bg-white border-gray-300 hover:shadow-md transition-all ease-linear">
      <div className="relative z-[-1] flex h-56 overflow-hidden w-full rounded-md">
        <Image
          fill
          src={props.src}
          alt={props.name}
          className="object-contain rounded-md group-hover:scale-110 transition-all ease-linear pointer-events-none"
        />
      </div>
      <div className="flex flex-col py-2 px-3">
        <div>
          <span className="text-black font-bold h-fit">{props.brand}</span>
          <span className="ml-2">{props.name}</span>
        </div>
        <div className="flex gap-1 mt-6">
          {props.discount.isAvailable && (
            <span className="font-bold text-black/30 line-through">
              {props.discount.discountPrice} $
            </span>
          )}
          <span className="font-bold text-green-600">{props.price} $</span>
        </div>
      </div>
      <div className="absolute flex flex-col top-2 left-2 gap-1">
        {props.freeShipment && (
          <div className="flex items-center justify-center w-[94px] gap-1 bg-green-600 text-white font-bold rounded">
            <div className="min-w-[16px] ml-1">
              <BsTruck size={16} />
            </div>
            <span className="text-xs">FREE SHIPMENT</span>
          </div>
        )}
        {props.fastDelivery && (
          <div className="flex items-center justify-start w-[94px] gap-1 bg-blue-600 text-white font-bold rounded">
            <div className="min-w-[16x] ml-1">
              <AiOutlineThunderbolt size={16} />
            </div>
            <span className="text-xs">FAST DELIVERY</span>
          </div>
        )}
      </div>
    </div>
  );
}
