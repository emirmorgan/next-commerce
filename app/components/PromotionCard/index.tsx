import Image from "next/image";
import {
  PromotionCardProps,
  PromotionCardPropsDefault,
} from "./promotionCardProps";

export default function PromotionCard(userProps: PromotionCardProps) {
  const props: Required<PromotionCardProps> = {
    ...PromotionCardPropsDefault,
    ...userProps,
  };

  return (
    <div className="w-full cursor-pointer group">
      <div className="relative h-64 sm:h-60 lg:h-72 xl:h-64 w-full overflow-hidden">
        <Image
          fill
          src={props.src}
          alt={props.desc}
          className="group-hover:scale-105 transition-all ease-linear"
        />
      </div>
      <div className="text-gray-600 border border-gray-200 py-3 px-4">
        <p>{props.brand}</p>
        <b className="group-hover:text-green-600">{props.desc}</b>
      </div>
    </div>
  );
}
