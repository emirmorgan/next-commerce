//Components
import SalesChart from "@/components/Dashboard/Main/SalesChart";
import Statistics from "@/components/Dashboard/Main/Statistics";
import VisitorChart from "@/components/Dashboard/Main/VisitorChart";
import OrderList from "@/components/Dashboard/Orders/OrderList";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-xl font-semibold mt-3">Dashboard</h1>
      <Statistics />
      <div className="flex flex-col gap-2 xl:flex-row">
        <div className="flex flex-col w-full border rounded mt-3 p-3 xl:w-2/4">
          <h1 className="text-lg font-semibold mb-3">Sales statistics</h1>
          <SalesChart />
        </div>
        <div className="flex flex-col w-full justify-center items-center border rounded overflow-hidden mt-3 p-3 xl:w-2/4">
          <h1 className="text-lg font-semibold mb-3">Visitor statistics</h1>
          <VisitorChart />
        </div>
      </div>
      <OrderList />
    </div>
  );
}
