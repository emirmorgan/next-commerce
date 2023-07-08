import HomePromotions from "./components/Home/HomePromotions";
import HomeScrollable from "./components/Home/HomeScrollable";
import Navbar from "./components/Navbar/Index";
import ProductCard from "./components/ProductCard";

import { dummyProducts } from "./constants/Index";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-gray-700 font-bold text-xl select-none mx-6">
          Promotions
        </h1>
        <HomePromotions />
        <HomeScrollable title="Example cards">
          {dummyProducts.map((product: any, index: any) => (
            <ProductCard
              brand={product.brand}
              name={product.name}
              src={product.src}
              price={product.price}
              discount={product.discount}
              fastDelivery={product.fastDelivery}
              freeShipment={product.freeShipment}
              key={index}
            />
          ))}
        </HomeScrollable>
      </div>
    </main>
  );
}
