"use client";

import { Order } from "@/lib/types";

import OrdersGrid from "@/components/Grids/OrdersGrid";
import { useDashboard } from "@/context/DashboardContext";

export default function OrderList() {
  const { ordersResponse } = useDashboard();

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-3">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Orders
        </h3>
      </div>
      {ordersResponse && (
        <OrdersGrid orders={ordersResponse.orders as Order[]} />
      )}
    </div>
  );
}
