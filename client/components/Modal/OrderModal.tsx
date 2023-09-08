import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import {
  AiOutlineAim,
  AiOutlineClose,
  AiOutlineEnvironment,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineLoading,
  AiOutlinePhone,
} from "react-icons/ai";

export default function OrderModal() {
  const { closeModal } = useModal();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center w-[300px] h-[300px]">
        <div className="animate-spin">
          <AiOutlineLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[600px] max-h-[600px] overflow-hidden p-3 my-2">
      <div className="flex justify-between items-center whitespace-nowrap">
        <h1 className="mr-auto text-xl font-bold text-gray-800">
          Order ID: 000000000
        </h1>
        <div className="flex justify-end w-full h-full">
          <div
            onClick={closeModal}
            className="border p-1 group hover:border-gray-800 hover:bg-black/5 cursor-pointer transition-all ease-linear"
          >
            <AiOutlineClose
              size={18}
              className="text-gray-900 transition-all ease-linear"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex justify-start items-center font-semibold gap-2">
          <div className="w-[8px] h-[8px] bg-green-600 rounded-full animate-ping" />
          <span className="text-green-600">Shipment on the way</span>
        </div>
        <span className="text-gray-500">
          Order date: <span className="text-gray-800">12 Jan 2023</span>
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-200 mt-3" />
      <div className="flex flex-col my-3 gap-3 max-h-[300px] overflow-auto scrollbar-cart">
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-24 h-24 border overflow-hidden mr-5">
            <Image
              fill
              src="/assets/products/nike/air-jordan/v1-1.webp"
              alt="test"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Air Jordan</span>
              <span className="text-gray-700">Nike / 42 </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700">89.99 $</span>
              <span className="text-gray-700">Quantity: 1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-200 mb-3" />
      <h1 className="font-semibold mb-2">Delivery Adress</h1>
      <div className="flex flex-col w-full border p-3 gap-2">
        <div className="flex items-center gap-2 whitespace-break-spaces break-words">
          <AiOutlineHome size={22} />
          <p>{user?.address.details}</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlinePhone size={22} min={22} />
          <span>{user?.address.contactNumber}</span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-3">
        <button className="flex items-center border border-gray-700 text-gray-700 font-semibold p-2 gap-2 hover:text-white hover:bg-gray-600">
          <AiOutlineFileText size={24} />
          <span>Invoice</span>
        </button>
        <button className="flex items-center border border-green-600 text-green-600 font-semibold p-2 gap-2 hover:text-white hover:bg-green-600">
          <AiOutlineEnvironment size={24} />
          <span>Track order</span>
        </button>
      </div>
    </div>
  );
}
