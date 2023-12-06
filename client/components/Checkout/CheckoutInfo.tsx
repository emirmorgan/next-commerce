import { AiOutlineLeft } from "react-icons/ai";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Cart } from "@/lib/types";

interface CheckoutInfoProps {
  products: Cart[];
  subtotal: number;
}

export default function CheckoutInfo({
  products,
  subtotal,
}: CheckoutInfoProps) {
  const router = useRouter();

  return (
    <div className="w-full max-w-[400px] select-none">
      <div className="flex items-center gap-2 my-4">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
        >
          <AiOutlineLeft size={24} />
        </div>

        <h2 className="font-bold text-xl ml-2">next-commerce</h2>
      </div>
      <ul className="max-h-[300px] scrollbar-cart overflow-auto">
        {products.map((product, index) => (
          <li key={index}>
            <div className="flex p-1">
              <div className="relative aspect-square w-16 h-16 rounded overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.brand}
                  fill
                  sizes="(max-width: 380px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-betweens text-sm text-gray-500 ml-3 gap-1">
                <span className="font-semibold text-black">{product.name}</span>
                <span>{`$${product.price} x ${product.quantity}`}</span>
                <span>
                  {product.brand +
                    (product.size ? " / " + product.size : "") +
                    (product.color ? " / " + product.color : "")}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col font-semibold mt-6">
        <h1 className="text-4xl">{`$${subtotal.toFixed(2)}`}</h1>
        <div className="flex justify-between items-center mt-4">
          <span>Shipment</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span>Subtotal</span>
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-2" />
        <div className="flex justify-between items-center">
          <span>Total due</span>
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
}
