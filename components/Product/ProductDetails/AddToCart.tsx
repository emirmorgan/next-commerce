"use client";

import { useState, useEffect } from "react";

import { CartItem, Product, ProductVariant } from "@/lib/types";
import { useShoppingCart } from "@/context/ShoppingCartContext";

type AddToCartProps = {
  product: Product | undefined;
  variant: ProductVariant | undefined;
  option: string | null;
  color: string | null;
};

export default function AddToCart({
  product,
  variant,
  option,
  color,
}: AddToCartProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const { addToCart } = useShoppingCart();

  //Validation control
  useEffect(() => {
    if (variant !== null) {
      if (!variant?.color && variant?.options && option !== null) {
        setIsValid(true);
      } else if (!variant?.color && variant?.options && option === null) {
        setIsValid(false);
      } else if (!variant?.color && !variant?.options) {
        setIsValid(true);
      }
    } else {
      setIsValid(false);
    }
  }, [variant, option, color]);

  const handleAddToCart = () => {
    if (isValid) {
      const cartItem = {
        id: product.id,
        brand: product.brand,
        name: product.name,
        src: variant.image.src,
        price: product.price.current,
        color: color,
        size: option,
      } as CartItem;

      addToCart(cartItem);
    }
  };

  return (
    <button
      disabled={!isValid}
      onClick={handleAddToCart}
      className="flex items-center justify-center bg-green-500 disabled:bg-green-300 text-white font-bold p-2 mt-4 rounded-full"
    >
      <span>ADD TO CART</span>
    </button>
  );
}
