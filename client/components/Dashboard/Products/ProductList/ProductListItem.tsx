import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Image from "next/image";
import { useDashboard } from "@/context/DashboardContext";
import { useModal } from "@/context/ModalContext";

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
  const { deleteProduct } = useDashboard();
  const { openModal, setProductId } = useModal();

  const handleModal = () => {
    setProductId(props.id);
    openModal("product");
  };

  return (
    <li className="flex items-center border-b gap-3 py-2 px-3">
      <div className="flex justify-center items-center gap-3">
        <div className="font-semibold">
          <span>{props.id}</span>
        </div>
        <div className="relative w-16 h-16">
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
      <div className="flex gap-2 ml-auto">
        <div
          onClick={handleModal}
          className="border cursor-pointer transition-all ease-linear p-2 hover:border-gray-500"
        >
          <AiOutlineEdit size={20} />
        </div>
        <div
          onClick={() => deleteProduct(props.id)}
          className="border cursor-pointer transition-all ease-linear p-2 hover:border-gray-500"
        >
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </li>
  );
}
