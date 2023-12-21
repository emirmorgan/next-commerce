import {
  AiOutlineAim,
  AiOutlineClose,
  AiOutlineLoading,
  AiOutlinePhone,
} from "react-icons/ai";

import Image from "next/image";

import formatDate from "@/lib/formatDate";

import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { useOrder } from "@/context/OrderContext";

export default function OrderModal() {
  const { closeModal } = useModal();
  const { user } = useAuth();
  const { currentOrder } = useOrder();

  if (!user || !currentOrder) {
    return (
      <div className="flex justify-center items-center w-[300px] h-[300px]">
        <div className="animate-spin">
          <AiOutlineLoading />
        </div>
      </div>
    );
  }

  const orderStatus = {
    preparing: "Preparing your order!",
    shipping: "Shipment on the way!",
    delivered: "Your shipment has been delivered!",
  }[currentOrder.orderStatus];

  return (
    <div className="max-w-[600px] max-h-[600px] overflow-hidden p-5 md:w-[600px] sm:w-[450px]">
      <div className="flex justify-between items-center whitespace-nowrap">
        <h1 className="mr-auto text-xl font-bold text-gray-800">
          Order ID: {currentOrder?.orderID}
        </h1>
        <div className="flex justify-end w-full h-full">
          <div onClick={closeModal} className="commerce-button">
            <AiOutlineClose
              size={18}
              className="text-gray-900 transition-all ease-linear"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-3 md:flex-row">
        <div className="flex justify-start items-center font-semibold gap-2">
          <div className="w-[8px] h-[8px] bg-green-600 rounded-full animate-ping" />
          <span className="text-green-600">{orderStatus}</span>
        </div>
        <span className="text-gray-500">
          Order date:{" "}
          <span className="text-gray-800">
            {formatDate(currentOrder.orderDate)}
          </span>
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-200 mt-3" />
      <ul className="flex flex-col my-3 gap-3 max-h-[200px] overflow-auto scrollbar-cart">
        {currentOrder.orderItems.map((orderItem, index) => (
          <li key={index} className="flex">
            <div className="relative w-24 h-24 border overflow-hidden mr-5">
              <Image
                fill
                src={orderItem.imageSrc}
                alt={orderItem.imageAlt}
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-semibold">{orderItem.name}</span>
                <span className="text-gray-700">
                  {orderItem.brand} /{" "}
                  {orderItem.size ? orderItem.size + " /" : ""}
                  {orderItem.color ? orderItem.color + " /" : ""}
                </span>
              </div>
              <div className="flex flex-col text-end">
                <span className="font-semibold text-gray-700">
                  {orderItem.price} $
                </span>
                <span className="text-gray-700">
                  Quantity: {orderItem.quantity}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="font-semibold mb-2">Delivery Address</h1>
      <div className="flex flex-col bg-slate-50 rounded p-3 gap-2">
        <div className="flex items-center text-gray-700 gap-2 whitespace-break-spaces break-words">
          <AiOutlineAim color="gray" size={22} />
          <p>{currentOrder.address.addressLine}</p>
        </div>
        <div className="flex items-center text-gray-700 gap-2">
          <AiOutlinePhone color="gray" size={22} />
          <span>{currentOrder.address.contactNumber}</span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-3">
        {currentOrder.orderInvoice && (
          <button className="commerce-button">
            <span>Invoice</span>
          </button>
        )}
        {currentOrder.orderTrace && (
          <button className="commerce-button">
            <span>Track order</span>
          </button>
        )}
      </div>
    </div>
  );
}
