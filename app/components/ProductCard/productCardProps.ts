export interface ProductCardProps {
  brand: string;
  name: string;
  src: string;
  price: number;
  discount: {
    isAvailable: boolean;
    discountPrice: number;
  };
  freeShipment: boolean;
  fastDelivery: boolean;
}

export const ProductCardPropsDefault: Required<ProductCardProps> = {
  brand: "",
  name: "",
  src: "",
  price: 0,
  discount: {
    isAvailable: false,
    discountPrice: 0,
  },
  freeShipment: false,
  fastDelivery: false,
};
