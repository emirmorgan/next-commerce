import FindOrderById from "@/components/Dashboard/Orders/FindOrderById";
import OrderList from "@/components/Dashboard/Orders/OrderList";
import Sort from "@/components/Sort";

export default function DashboardOrders() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center gap-2">
        <FindOrderById />
        <Sort />
      </div>
      <OrderList />
    </div>
  );
}
