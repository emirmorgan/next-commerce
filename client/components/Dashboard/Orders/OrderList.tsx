"use client";

import { Order } from "@/lib/types";

import OrdersGrid from "@/components/Grids/OrdersGrid";
import { useDashboard } from "@/context/DashboardContext";
import PaginationBar from "@/components/PaginationBar";

export default function OrderList() {
  const { ordersResponse } = useDashboard();

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-3">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Orders{" "}
            {`(${
              ordersResponse?.totalOrders ? ordersResponse.totalOrders : 0
            })`}
          </h3>
        </div>
        {ordersResponse && (
          <OrdersGrid orders={ordersResponse.orders as Order[]} />
        )}
      </div>
      {ordersResponse && (
        <PaginationBar
          totalItems={ordersResponse.totalOrders}
          pageSize={ordersResponse.pageSize}
          pageNumber={ordersResponse.pageNumber}
        />
      )}
    </>
  );
}
