type ProductVariantOption = {
  option: string;
  quantity: number;
};

export type ProductVariant = {
  color?: string;
  options: ProductVariantOption[];
  image: {
    src: string;
    alt: string;
  };
};

export type Product = {
  id: number;
  brand: string;
  name: string;
  desc: string;
  src: string;
  slug: string;
  price: {
    current: number;
    discount?: number;
  };
  variants?: ProductVariant[];
  badges: { freeShipment: boolean; fastDelivery: boolean; newProduct: boolean };
  tags: String[];
  quantity: number;
};

export type Cart = {
  id: number;
  productId: number;
  brand: string;
  name: string;
  src: string;
  price: number;
  color?: string;
  size?: string;
  quantity: number;
};

export type CartItem = {
  id: number;
  productId: number;
  brand: string;
  name: string;
  src: string;
  price: number;
  color?: string;
  size?: string;
};

export type Carousel = {
  href: string;
  src: string;
  alt: string;
};

export type Promotions = {
  brand: string;
  desc: string;
  src: string;
};
