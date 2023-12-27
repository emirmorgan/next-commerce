import { Order } from "@/lib/types";

//Components
import Skeleton from "./Skeleton";
import OrdersGridItem from "./OrdersGridItem";

export default function OrdersGrid(data: { orders: Order[] }) {
  if (!data) {
    return <Skeleton />;
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="h-12 px-4 text-left font-medium">Order ID</th>
          <th className="h-12 px-4 text-left font-medium">Date</th>
          <th className="h-12 px-4 text-left font-medium">Status</th>
          <th className="h-12 px-4 text-left font-medium">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.orders
          ?.toReversed()
          .map((order, index) => (
            <OrdersGridItem
              key={index}
              orderID={order.orderID}
              orderStatus={order.orderStatus}
              orderTotal={order.orderTotal}
              orderDate={order.orderDate}
              address={order.address}
              orderInvoice={order.orderInvoice}
              orderItems={order.orderItems}
            />
          ))}
      </tbody>
    </table>
  );
}
