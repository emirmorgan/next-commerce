import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

//Components
import Carousel from "@/components/Carousel";
import Scrollable from "@/components/Scrollable";
import ProductCard from "@/components/ProductCard";
import PromotionCard from "@/components/PromotionCard";

import { products, promotions } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <article className="w-full px-5 my-3 mb-[36px]">
        <Carousel />
      </article>
      <section id="trending">
        <article className="w-full px-5 my-3">
          <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
            Trending Products
          </h1>
          <Scrollable dragging={true}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                desc={product.desc}
                src={product.src}
                slug={product.slug}
                price={{
                  current: product.price.current,
                  discount: product.price.discount,
                }}
                badges={product.badges}
                tags={product.tags}
              />
            ))}
          </Scrollable>
        </article>
      </section>
      <section id="promotions">
        <article className="w-full px-5 my-3">
          <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
            Promotions
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 content-center gap-3">
            {promotions.map((item, index) => (
              <PromotionCard
                key={index}
                brand={item.brand}
                desc={item.desc}
                src={item.src}
              />
            ))}
          </div>
        </article>
      </section>
      <section id="products">
        <article className="w-full px-5 my-5">
          <div className="grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 place-items-center gap-3 flex-wrap">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                desc={product.desc}
                src={product.src}
                slug={product.slug}
                price={{
                  current: product.price.current,
                  discount: product.price.discount,
                }}
                badges={product.badges}
                tags={product.tags}
              />
            ))}
          </div>
          <div className="my-5 flex items-center justify-center">
            <Link href="./">
              <div className="flex justify-center items-center text-lg font-bold p-5 h-8 border-2 border-gray-200 text-green-600 gap-2 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all ease-linear">
                <span>Explore All</span>
                <AiOutlineArrowRight />
              </div>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
