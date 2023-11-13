//Components
import Carousel from "@/components/Carousel";
import Campaings from "@/components/Home/Campaigns";
import Products from "@/components/Home/Products";
import TrendingProducts from "@/components/Home/TrendingProducts";

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
