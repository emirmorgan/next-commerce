import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

//Components
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import CampaignCard from "@/components/CampaignCard";
import TrendingProducts from "@/components/TrendingProducts";

import { products, campaigns } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <article className="w-full px-5 my-3 mb-[36px]">
        <Carousel />
      </article>
      <section id="trending">
        <TrendingProducts />
      </section>
      <section id="promotions">
        <article className="w-full px-5 my-3">
          <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
            Campaigns
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 content-center gap-3">
            {campaigns.map((item) => (
              <CampaignCard
                key={crypto.randomUUID()}
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
                key={crypto.randomUUID()}
                id={product.id}
                brand={product.brand}
                name={product.name}
                gender={product.gender}
                category={product.category}
                desc={product.desc}
                src={product.src}
                slug={product.slug}
                price={{
                  current: product.price.current,
                  discount: product.price.discount,
                }}
                tags={product.tags}
                quantity={product.quantity}
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
