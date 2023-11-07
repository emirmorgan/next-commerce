import { AiOutlineEdit, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

export type ProductListItemProps = {
  id: number;
  name: string;
  slug: string;
  src: string;
  alt: string;
  price: number;
  discountPrice: number;
  quantity: number;
};

export default function ProductListItem(props: ProductListItemProps) {
  return (
    <li className="flex items-center border-b gap-3 py-2 px-3">
      <div className="flex justify-center items-center gap-3">
        <div className="font-semibold">
          <span>{props.id}</span>
        </div>
        <div className="relative w-12 h-12">
          <Image
            fill
            src={props.src}
            alt={props.name}
            className="object-contain w-full h-full group-hover:scale-110 transition-allease-linear pointer-events-none"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority={true}
          />
        </div>
        <div className="flex max-w-[125px]">
          <span className="truncate ...">{props.name}</span>
        </div>
      </div>
      <div className="ml-auto border cursor-pointer transition-all ease-linear p-2 hover:border-gray-500">
        <AiOutlineEdit size={24} />
      </div>
    </li>
  );
}
