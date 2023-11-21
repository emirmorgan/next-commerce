"use client";

import { useDashboard } from "@/context/DashboardContext";

//Components
import Order from "./Order";
import OrdersSkeleton from "./Skeleton";
import Sort from "@/components/Sort";

type OrderListProps = {
  title?: string;
  sort?: boolean;
};

export default function OrderList(props: OrderListProps) {
  const { orders } = useDashboard();

  if (!orders) {
    return <OrdersSkeleton />;
  }

  return (
    <div className="border rounded mt-3">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="font-semibold">
          {props.title ? (
            <h1>
              {props.title} {`(${orders.totalOrders})`}
            </h1>
          ) : (
            <h1>Last Orders</h1>
          )}
        </div>
        {props.sort && <Sort />}
      </div>
      <ul>
        {orders.totalOrders === 0 && (
          <li className="flex justify-center items-center font-semibold text-lg p-3">
            <span>😵 Couldn&apos;t find any order.</span>
          </li>
        )}
        {orders.orders?.map((order, index) => (
          <Order
            key={index}
            orderId={order.orderId}
            name={order.name}
            contact={order.contact}
            orderStatus={order.orderStatus}
            orderTotal={order.orderTotal}
            orderDate={order.orderDate}
          />
        ))}
      </ul>
    </div>
  );
}
