//Components
import Carousel from "@/components/Home/Carousel";
import Campaings from "@/components/Home/Campaigns";
import TrendingProducts from "@/components/TrendingProducts";
import Products from "@/components/Home/Products";

export default function Home() {
  return (
    <>
      <Carousel />
      <TrendingProducts />
      <Campaings />
      <Products />
    </>
  );
}
