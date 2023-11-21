import FindOrderById from "@/components/Dashboard/Orders/FindOrderById";
import OrderList from "@/components/Dashboard/Orders/OrderList";

export default function DashboardOrders() {
  return (
    <div className="flex flex-col">
      <FindOrderById />
      <OrderList title="Orders" sort={true} />
    </div>
  );
}
