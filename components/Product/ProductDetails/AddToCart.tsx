"use client";

import { useState, useEffect } from "react";

import { CartItem, Product, ProductVariant } from "@/lib/types";
import { useShoppingCart } from "@/context/ShoppingCartContext";

type AddToCartProps = {
  product: Product;
  variant: ProductVariant;
  option: string;
  color: string;
};

export default function AddToCart({
  product,
  variant,
  option,
  color,
}: AddToCartProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const { addToCart, cartItems } = useShoppingCart();

  //Validation control
  useEffect(() => {
    if (variant === null) return setIsValid(false);
    if (!variant?.options) return setIsValid(true);
    if (variant?.options && option === null) return setIsValid(false);
    if (variant.color && color == null) return setIsValid(false);

    setIsValid(true);
  }, [variant, option, color]);

  const handleAddToCart = () => {
    if (isValid) {
      const cartItem = {
        id: cartItems.length + 1,
        productId: product.id,
        brand: product.brand,
        name: product.name,
        src: variant ? variant.image.src : product.src,
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
