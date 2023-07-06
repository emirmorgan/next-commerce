import Image from "next/image";

import { promotions } from "@/app/constants/Index";

export default function HomePromotions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 content-center place-items-center my-2 mx-4">
      {promotions.map((item, index) => {
        return (
          <div key={index} className="w-full cursor-pointer group p-2">
            <div className="relative h-64 sm:h-60 lg:h-72 xl:h-64 w-full overflow-hidden">
              <Image
                fill
                src={item.src}
                alt={item.desc}
                className="group-hover:scale-105 transition-all ease-linear"
              />
            </div>
            <div className="text-gray-600 border border-gray-200 py-3 px-4">
              <p>{item.brand}</p>
              <b className="group-hover:text-green-600">{item.desc}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}
