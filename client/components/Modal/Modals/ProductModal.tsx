import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/lib/types";
import { useModal } from "@/context/ModalContext";

export default function ProductModal() {
  const router = useRouter();
  const { closeModal, productId } = useModal();

  const [product, setProduct] = useState<Product>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStockTabVisible, setStockTabVisible] = useState<boolean>(false);
  const [isPriceTabVisible, setPriceTabVisible] = useState<boolean>(true);

  const [variantName, setVariantName] = useState<string>("Size");
  const [variantValue, setVariantValue] = useState<string>("");

  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);

    const fetchProduct = async () => {
      const product = await axios
        .get(
          process.env.NEXT_PUBLIC_API_URL +
            `/products/details?productId=${productId}`
        )
        .then((response) => {
          return response.data;
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(() => {
          toast.error("Something went wrong.");

          router.push("/");
        });

      setProduct(product);
      console.log(product);
    };

    fetchProduct();
    // eslint-disable-next-line
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSavePrice = () => {
    if (currentPrice) {
      console.log(currentPrice, discountPrice);
    } else {
      toast.error("Price is not valid.");
    }
  };

  const handleIncreaseStock = (id: number) => {};

  const handleDecreaseStock = (id: number) => {};

  const handleVariantAdd = () => {
    if (variantName && variantValue) {
      // add
    } else {
      toast.error("Variant is not valid.");
    }
  };

  const handleVariantRemove = (id: number) => {};

  return (
    <div className="flex flex-col w-[350px] py-4 px-4 gap-3">
      <div className="flex justify-between items-center gap-5">
        <h1 className="font-bold">Product Details</h1>
        <div
          onClick={closeModal}
          className="border p-1 group hover:border-gray-800 hover:bg-black/5 cursor-pointer transition-all ease-linear"
        >
          <AiOutlineClose
            size={18}
            className="text-gray-900 transition-all ease-linear"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative border w-[300px] h-[250px] mx-auto">
          <Image
            className="object-contain"
            src={product?.images[0].src as string}
            alt={product?.images[0].alt as string}
            fill
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col font-semibold mt-2">
            <span className="text-sm text-gray-500">{product?.brand}</span>
            <span>{product?.name}</span>
          </div>
          <div className="flex flex-col font-semibold mt-2">
            <span className="font-bold text-sm text-gray-500 line-through">
              {product?.price + "$"}
            </span>
            {product?.discountPrice && (
              <span className="font-semibold text-black">
                {product.discountPrice + "$"}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <span className="text-sm font-semibold mb-1">Options</span>
          <div className="flex flex-wrap text-xs font-semibold text-gray-700 gap-2">
            <div
              onClick={() => setStockTabVisible(!isStockTabVisible)}
              className="flex justify-center items-center border cursor-pointer transition-all ease-linear p-2 gap-1 hover:border-black hover:text-black"
            >
              {isStockTabVisible ? (
                <AiOutlineMinus size={16} className="text-black" />
              ) : (
                <AiOutlinePlus size={16} className="text-black" />
              )}
              <span>Add/Remove Stock</span>
            </div>
            <div
              onClick={() => setPriceTabVisible(!isPriceTabVisible)}
              className="flex justify-center items-center border cursor-pointer transition-all ease-linear p-2 gap-1 hover:border-black hover:text-black"
            >
              {isPriceTabVisible ? (
                <AiOutlineMinus size={16} className="text-black" />
              ) : (
                <AiOutlinePlus size={16} className="text-black" />
              )}
              <span>Change Price</span>
            </div>
          </div>
          <div
            className={
              "flex flex-col mt-3" +
              (isStockTabVisible ? " flex flex-col " : " hidden")
            }
          >
            <span className="text-sm font-semibold">Stock Management</span>
            <div className="h-[2px] bg-black/20 rounded-full my-1" />
            <ul className="mt-1">
              {product?.variants.map((variant, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black animate-pulse rounded-full" />
                  <div className="flex w-full justify-between">
                    <span>{variant.name + ": " + variant.value}</span>
                    <div className="flex justify-center items-center gap-2">
                      <div
                        onClick={() => handleDecreaseStock(variant.id)}
                        className="border cursor-pointer p-1 hover:border-black"
                      >
                        <AiOutlineMinus size={14} />
                      </div>
                      <div className="flex items-center justify-center w-4">
                        <span className="select-none">{variant.quantity}</span>
                      </div>

                      <div
                        onClick={() => handleIncreaseStock(variant.id)}
                        className="border cursor-pointer p-1 hover:border-black"
                      >
                        <AiOutlinePlus size={14} />
                      </div>
                      <div
                        onClick={() => handleVariantRemove(variant.id)}
                        className="border cursor-pointer p-1 ml-3 hover:border-red-500"
                      >
                        <AiOutlineDelete />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex border">
                <select
                  name="variantName"
                  id="variantName"
                  value={variantName}
                  onChange={(e) => setVariantName(e.target.value)}
                  className="p-1 w-20 outline-none border-r hover:bg-black/10"
                >
                  <option value="Size">Size</option>
                  <option value="Color">Color</option>
                </select>
                <input
                  name="variantValue"
                  id="variantValue"
                  type="text"
                  placeholder="41"
                  value={variantValue}
                  onChange={(e) => setVariantValue(e.target.value)}
                  className="w-full h-8 p-2 focus:outline-none"
                />
                <div
                  onClick={handleVariantAdd}
                  className="border-l cursor-pointer py-1 px-2 hover:bg-black/10"
                >
                  Add
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "flex flex-col  mt-3" +
              (isPriceTabVisible ? " flex flex-col " : " hidden")
            }
          >
            <span className="text-sm font-semibold">Change Price</span>
            <div className="h-[2px] bg-black/20 rounded-full my-1" />
            <div className="flex gap-2 mt-1">
              <div className="flex flex-col">
                <span className="text-sm">Current Price</span>
                <input
                  type="number"
                  className="border w-full h-8 p-2"
                  placeholder="49.99$"
                  onChange={(e) => setCurrentPrice(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm">Discount Price</span>
                <input
                  type="number"
                  className="border w-32 h-8 p-2"
                  placeholder="Optional..."
                  onChange={(e) => setDiscountPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div
              onClick={handleSavePrice}
              className="bg-black text-white cursor-pointer py-1 px-2 ml-auto mt-2"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
