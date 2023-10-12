"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useAuth } from "@/context/AuthContext";
import { useProducts } from "@/context/ProductsContext";

export type ProductCardProps = {
  id: number;
  brand: string;
  name: string;
  slug: string;
  src: string;
  alt: string;
  price: number;
  discountPrice: number;
  isFavorite: boolean;
  children?: React.ReactNode;
};

export default function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const { authenticated } = useAuth();
  const { fetchProducts, updateFavorites } = useProducts();

  const handleFavorite = (e: any, isFavorite: boolean, productId: number) => {
    e.stopPropagation();

    if (authenticated) {
      if (isFavorite) {
        updateFavorites("delete", productId);
        fetchProducts();
      } else {
        updateFavorites("add", productId);
        fetchProducts();
      }
    } else {
      router.push("/login");
    }
  };

  const handleNavigate = () => {
    router.push(`/product/${props.slug + "-p-" + props.id}/`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative z-0 group flex flex-auto w-full max-w-[280px] h-[360px] flex-col items-center border cursor-pointer bg-white border-gray-300 hover:border-gray-400 transition-all ease-linear overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-[2]">
        <div
          className={
            "border bg-white border-gray-300 p-2 transition-all ease-linear " +
            (props.isFavorite
              ? " text-red-600 border-red-600 hover:border-red-400 hover:text-red-400"
              : " hover:text-black hover:bg-slate-100 hover:border-black")
          }
          onClick={(e) => handleFavorite(e, props.isFavorite, props.id)}
        >
          {props.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      </div>
      <div className="relative z-[-1] w-full flex overflow-hidden pointer-events-none">
        <div className="relative w-full min-h-64 h-64">
          <Image
            fill
            src={props.src}
            alt={props.name}
            className="object-contain w-full h-full group-hover:scale-110 transition-all ease-linear pointer-events-none"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-32 my-3 px-3">
        <div>
          <span className="text-black font-bold h-fit">{props.brand}</span>
          <span className="ml-2">{props.name}</span>
        </div>
        <div className="flex flex-col mt-6">
          {props.discountPrice ? (
            <>
              <span className="font-bold text-sm text-gray-500 line-through">
                {props.price} USD
              </span>
              <span className="font-bold text-black">
                {props.discountPrice} USD
              </span>
            </>
          ) : (
            <span className="font-bold text-black">{props.price} USD</span>
          )}
        </div>
      </div>
    </div>
  );
}
