import { AiOutlineFileText } from "react-icons/ai";

import { Order } from "@/lib/types";

import { useModal } from "@/context/ModalContext";
import { useOrder } from "@/context/OrderContext";

export default function UserOrders() {
  const { orders, getOrder } = useOrder();
  const { openModal } = useModal();

  const handleOrder = async (orderID: number) => {
    try {
      await getOrder(orderID);
    } catch (error) {
      console.error("Error fetching order:", error);
    }

    openModal("order");
  };

  return (
    <ul className="flex flex-col gap-2">
      {orders?.map((order: Order, index: number) => (
        <li className="flex items-center gap-1" key={index}>
          <div className="w-full border p-2">
            <span>
              Order Id: {order.orderID} -{" "}
              {new Date(order.orderDate).toLocaleDateString()}
            </span>
          </div>
          <div
            onClick={() => handleOrder(order.orderID)}
            className="border p-2 cursor-pointer hover:border-black transition-all ease-linear"
          >
            <AiOutlineFileText size={24} />
          </div>
        </li>
      ))}
    </ul>
  );
}
