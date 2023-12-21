import formatDate from "@/lib/formatDate";
import { Order } from "@/lib/types";

import { useModal } from "@/context/ModalContext";
import { useOrder } from "@/context/OrderContext";

export default function OrdersGridItem({
  orderID,
  orderStatus,
  orderTotal,
  orderDate,
  orderInvoice,
  address,
  orderItems,
}: Order) {
  const { getOrder } = useOrder();
  const { openModal } = useModal();

  const status = {
    preparing: <Preparing />,
    shipping: <Shipping />,
    delivered: <Delivered />,
  }[orderStatus];

  const handleOrder = async (orderID: number) => {
    try {
      await getOrder(orderID);
    } catch (error) {
      console.error("Error fetching order:", error);
    }

    openModal("order");
  };

  return (
    <tr
      onClick={() => handleOrder(orderID)}
      className="border-b cursor-pointer text-sm hover:bg-gray-50"
    >
      <td className="p-4">
        <span className="">{"ORD" + orderID}</span>
      </td>
      <td className="p-4">
        <span>{formatDate(orderDate)}</span>
      </td>
      <td className="p-4">{status}</td>
      <td className="p-4">
        <span>{"$" + orderTotal}</span>
      </td>
    </tr>
  );
}

const Preparing = () => {
  return (
    <div className="bg-blue-500 text-white w-fit rounded-full text-xs font-semibold py-0.5 px-2.5">
      Preparing
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="bg-orange-500 text-white w-fit rounded-full text-xs font-semibold py-0.5 px-2.5">
      Shipping
    </div>
  );
};

const Delivered = () => {
  return (
    <div className="bg-green-500 text-white w-fit rounded-full text-xs font-semibold py-0.5 px-2.5">
      Delivered
    </div>
  );
};
