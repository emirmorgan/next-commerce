"use client";

import { useState, useEffect } from "react";

import { CartItem, Product, ProductVariant } from "@/lib/types";
import { useShoppingCart } from "@/context/ShoppingCartContext";

type AddToCartProps = {
  size: string;
  color: string;
  product: Product;
};

export default function AddToCart({ size, color, product }: AddToCartProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const { addToCart, cartItems } = useShoppingCart();

  useEffect(() => {
    if (product?.variants && size == null) return setIsValid(false);
    if (!product?.variants) return setIsValid(true);

    //Check size validation
    if (
      size &&
      !product?.variants.some(
        (variant) => variant.name == "Size" && variant.value == size
      )
    ) {
      return setIsValid(false);
    }

    //Check color validation
    if (
      color &&
      !product?.variants.some(
        (variant) => variant.name == "Color" && variant.value == color
      )
    ) {
      return setIsValid(false);
    }

    setIsValid(true);

    // eslint-disable-next-line
  }, [size, color]);

  const handleAddToCart = () => {
    if (isValid) {
      const cartItem = {
        id: cartItems.length + 1,
        productId: product.id,
        brand: product.brand,
        name: product.name,
        src: product.images ? product.images[0].src : "/assets/logo.png",
        price: product.price,
        size: size,
      } as CartItem;

      addToCart(cartItem);
    }
  };

  return (
    <button
      disabled={!isValid}
      onClick={handleAddToCart}
      className="flex items-center justify-center bg-black disabled:bg-black/20 text-white font-bold p-2 mt-4 transition-all ease-linear"
    >
      <span>ADD TO CART</span>
    </button>
  );
}
