export interface ProductCardProps {
  brand: string;
  name: string;
  src: string;
  price: number;
  discount?: {
    discountPrice: number;
  };
  freeShipment?: boolean;
  fastDelivery?: boolean;
  isFavorite?: boolean;
}

export const ProductCardPropsDefault: Required<ProductCardProps> = {
  brand: "",
  name: "",
  src: "",
  price: 0,
  discount: {
    discountPrice: 0,
  },
  freeShipment: false,
  fastDelivery: false,
  isFavorite: false,
};
