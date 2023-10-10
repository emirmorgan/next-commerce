import ProductDetails from "@/components/Product/ProductDetails";
import TrendingProducts from "@/components/TrendingProducts";

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
