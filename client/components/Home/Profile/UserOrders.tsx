"use client";

import { useEffect } from "react";

import { Order } from "@/lib/types";
import { useOrder } from "@/context/OrderContext";

import OrdersGrid from "@/components/Grids/OrdersGrid";

export default function UserOrders() {
  const { orders, fetchOrders } = useOrder();

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col w-full rounded shadow max-h-[400px] overflow-auto scrollbar-cart p-4 gap-3 lg:w-2/3">
      <h1 className="text-xl font-bold">Orders {"(" + orders.length + ")"}</h1>
      <OrdersGrid orders={orders as Order[]} />
    </div>
  );
}
