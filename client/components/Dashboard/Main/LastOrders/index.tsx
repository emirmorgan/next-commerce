"use client";

import { useDashboard } from "@/context/DashboardContext";

import Order from "./Order";
import OrdersSkeleton from "./Skeleton";
import { randomUUID } from "crypto";

export default function Orders() {
  const { isLoading, ordersResponse } = useDashboard();

  if (isLoading) {
    return <OrdersSkeleton />;
  }

  console.log(ordersResponse);

  return (
    <div className="border rounded mt-3">
      <div className="border-b p-2">
        <h1 className="font-bold">Latest orders</h1>
      </div>
      <ul>
        {ordersResponse.totalOrders === 0 && (
          <li className="flex justify-center items-center font-semibold text-lg p-3">
            <span>😵 Couldn&apos;t find any order.</span>
          </li>
        )}
        {ordersResponse.orders?.map((order) => (
          <Order
            key={randomUUID()}
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
