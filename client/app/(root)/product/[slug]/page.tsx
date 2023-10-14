import ProductDetails from "@/components/Home/Product";
import TrendingProducts from "@/components/Home/TrendingProducts";

export default function ProductPage() {
  return (
    <>
      <section id="product">
        <ProductDetails />
      </section>
      <section id="trending" className="mt-4">
        <TrendingProducts />
      </section>
    </>
  );
}
