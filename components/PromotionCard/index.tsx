import Image from "next/image";

import { Promotions } from "@/lib/types";

export default function PromotionCard(props: Promotions) {
  return (
    <div className="w-full cursor-pointer group overflow-hidden">
      <div className="relative h-64 sm:h-60 lg:h-72 xl:h-64 w-full overflow-hidden">
        <Image
          fill
          src={props.src}
          alt={props.desc}
          className="object-cover group-hover:scale-105 transition-all ease-linear"
        />
      </div>
      <div className="h-24 text-gray-600 border border-gray-200 py-3 px-4">
        <p>{props.brand}</p>
        <b className="group-hover:text-green-600">{props.desc}</b>
      </div>
    </div>
  );
}
