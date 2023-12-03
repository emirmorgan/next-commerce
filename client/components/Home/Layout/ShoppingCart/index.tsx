import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";

import { useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";

import useClickOutside from "@/hooks/useClickOutside";
import { useShoppingCart } from "@/context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const elRef = useRef() as MutableRefObject<HTMLDivElement>;

  const {
    cartItems,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getQuantity,
    getSubtotal,
    goCheckout,
  } = useShoppingCart();

  const handleClickOutside = () => {
    closeCart();
  };

  useClickOutside(elRef, handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div
      className={
        "fixed z-[50] top-0 left-0 w-full h-full bg-black/40" +
        (isOpen ? " block" : " hidden")
      }
    >
      <div
        ref={elRef}
        className="fixed z-[100] top-0 right-0 w-full h-full max-w-[500px] bg-white shadow-lg"
      >
        <div className="flex flex-col justify-start items-start w-full h-full p-5">
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-lg">My Cart</div>
            <div
              onClick={closeCart}
              className="border p-1 group hover:border-gray-800 hover:bg-black/5 cursor-pointer transition-all ease-linear"
            >
              <AiOutlineClose
                size={24}
                className="text-gray-900 transition-all ease-linear"
              />
            </div>
          </div>
          {cartItems?.length !== 0 ? (
            <>
              <ul className="flex flex-col w-full h-full min-h-[400px] my-2 overflow-y-scroll scrollbar-cart">
                {cartItems?.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center w-[90%] min-h-[120px] mx-auto py-3 overflow-hidden border-b border-neutral-300 select-none"
                  >
                    <div className="relative w-28 h-24 border overflow-hidden mr-5">
                      <Image
                        fill
                        src={item.src}
                        alt={item.brand}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-center w-full h-full gap-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col break-all mr-3">
                          <span className="font-bold text-sm">{item.name}</span>
                          <span>
                            {item.brand}
                            {item.size ? " / " + item.size : ""}
                            {item.color ? " / " + item.color : ""}
                          </span>
                        </div>
                        <div className="whitespace-nowrap">
                          <span>${item.price} USD</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end w-full">
                        <div
                          onClick={() => removeItem(item.id)}
                          className="border p-1 cursor-pointer hover:border-red-500 hover:bg-red-500/10 transition-all ease-linear"
                        >
                          <AiOutlineDelete />
                        </div>
                        <div className="flex gap-1">
                          <div
                            onClick={() => decreaseQuantity(item.id)}
                            className="border p-1 cursor-pointer hover:border-gray-800 hover:bg-black/5 transition-all ease-linear"
                          >
                            <AiOutlineMinus />
                          </div>
                          <div className="border pointer-events-none">
                            <input
                              disabled={true}
                              value={getQuantity(item.id)}
                              className="max-w-[40px] text-center focus:outline-none px-1"
                            ></input>
                          </div>
                          <div
                            onClick={() => increaseQuantity(item.id)}
                            className="border p-1 cursor-pointer hover:border-gray-800 hover:bg-black/5 transition-all ease-linear"
                          >
                            <AiOutlinePlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col w-full select-none">
                <div className="flex flex-col py-2 border-b">
                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span className="text-gray-700 font-light">
                      Calculated at checkout
                    </span>
                  </div>
                </div>
                <div className="flex flex-col py-2 mb-1">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>${getSubtotal?.toFixed(2)} USD</span>
                  </div>
                </div>
                <div
                  onClick={goCheckout}
                  className="flex justify-center items-center w-full h-10 bg-black/90 hover:bg-black text-white font-bold text-sm cursor-pointer"
                >
                  PROCEED TO CHECKOUT
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full text-xl font-bold gap-2 select-none">
              <AiOutlineShopping size={64} />
              <h1>Your cart is empty</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
