//Components
import ProductsList from "@/components/Dashboard/Products/ProductList";
import ProductManage from "@/components/Dashboard/Products/ProductManage";

export default function DashboardProducts() {
  return (
    <div className="flex flex-col h-full w-full">
      <ProductManage />
      <ProductsList />
    </div>
  );
}
