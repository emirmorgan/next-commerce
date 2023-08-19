import { products } from "@/lib/constants";

import Scrollable from "../Scrollable";
import ProductCard from "../ProductCard";

export default function TrendingProducts() {
  return (
    <article className="w-full px-5 my-3">
      <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
        Trending Products
      </h1>
      <Scrollable dragging={true}>
        {products.map((product) => (
          <ProductCard
            key={crypto.randomUUID()}
            id={product.id}
            brand={product.brand}
            name={product.name}
            desc={product.desc}
            src={product.src}
            gender={product.gender}
            category={product.category}
            slug={product.slug}
            price={{
              current: product.price.current,
              discount: product.price.discount,
            }}
            tags={product.tags}
            quantity={product.quantity}
          />
        ))}
      </Scrollable>
    </article>
  );
}
