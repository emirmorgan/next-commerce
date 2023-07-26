import {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";

import { shopcartItems } from "@/app/constants/Index";

import Image from "next/image";

import useClickOutside from "@/app/hooks/useClickOutside";

interface ShopcartProps {
  isShopcartVisible: boolean;
  setShopcartVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Shopcart({
  isShopcartVisible,
  setShopcartVisible,
}: ShopcartProps) {
  const elRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [total, setTotal] = useState<number>(0);

  const handleClickOutside = () => {
    setShopcartVisible(false);
  };

  useClickOutside(elRef, handleClickOutside);

  useEffect(() => {
    if (isShopcartVisible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isShopcartVisible]);

  return (
    <>
      <div
        ref={elRef}
        className={
          "fixed z-[998] top-0 left-0 w-full h-full bg-black/40" +
          (isShopcartVisible ? " block md:hidden" : " hidden")
        }
      />
      <div
        className={
          "absolute z-[999] top-0 right-0 h-full w-full max-w-[500px] bg-white shadow-lg transition-all ease-linear" +
          (isShopcartVisible ? " flex flex-col md:hidden" : " hidden")
        }
      >
        <div className="flex flex-col justify-start items-start w-full h-full p-5">
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-lg">My Cart</div>
            <div
              onClick={() => setShopcartVisible(false)}
              className="border p-1 group hover:border-gray-800 hover:bg-black/5 cursor-pointer transition-all ease-linear"
            >
              <AiOutlineClose
                size={24}
                className="text-gray-900 transition-all ease-linear"
              />
            </div>
          </div>
          {shopcartItems.length !== 0 ? (
            <>
              <ul className="flex flex-col w-full h-full min-h-[400px] my-2 overflow-auto">
                {shopcartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center w-[90%] mx-auto py-3 overflow-hidden border-b border-neutral-300"
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
                          <span>{item.brand}</span>
                        </div>
                        <div className="whitespace-nowrap">
                          <span>${item.price} USD</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end w-full">
                        <div className="border p-1 cursor-pointer hover:border-red-500 hover:bg-red-500/10 transition-all ease-linear">
                          <AiOutlineDelete />
                        </div>
                        <div className="flex gap-1">
                          <div className="border p-1 cursor-pointer hover:border-gray-800 hover:bg-black/5 transition-all ease-linear">
                            <AiOutlineMinus />
                          </div>
                          <div className="border pointer-events-none">
                            <input
                              disabled={true}
                              defaultValue={3}
                              className="max-w-[40px] text-center focus:outline-none px-1"
                            ></input>
                          </div>
                          <div className="border p-1 cursor-pointer hover:border-gray-800 hover:bg-black/5 transition-all ease-linear">
                            <AiOutlinePlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col w-full">
                <div className="flex flex-col mb-3">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>${total} USD</span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full h-10 bg-black/90 hover:bg-black text-white font-bold text-sm cursor-pointer">
                  PROCEED TO CHECKOUT
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full text-xl font-bold gap-2">
              <AiOutlineShopping size={64} />
              <h1>Your cart is empty</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
